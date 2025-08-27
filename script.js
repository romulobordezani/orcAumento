const SPREAD_SHEET_ID = ' Coloque aqui o ID da sua planilha';

const FIRST_ROW = 8;
const MAX_DEBT_ROWS = 44;
const UI_COLUMNS = 3;
const INITIAL_ZERO_VALUE = 0;

const INCOME_COLUMN = 3;
const HEALTH_AND_FOOD_COLUMN = 8;
const LIVING_COLUMN = 13;
const MOBILITY_COLUMN = 18;
const ENTERTAINMENT_COLUMN = 23;
const PET_COLUMN = 28;
const DEBT_COLUMN = 33;

function getCleanValue(dirtyValue) {
    const forcedToNum = parseFloat(dirtyValue);

    if (isNaN(forcedToNum)) {
        return 0;
    }

    return +forcedToNum.toFixed(2);
}


function getCategorizedTotals(range, category) {
    const data = range.getValues();

    return data.reduce(
        (acc, row) => {
            const value = getCleanValue(row[0]);
            const debtType = row[1];
            const isPayed = row[2];
            const isAnEstimation = !row[2];

            const DEBIT_TYPE_INSTANCES = {
                'Recursos': acc.resources,
                'Ticket': acc.ticket,
                'Crédito': acc.creditCard,
                'Geral': acc.general,
                default: acc.resources
            }

            const selectedDebtType = DEBIT_TYPE_INSTANCES[debtType] || DEBIT_TYPE_INSTANCES.default;

            if (isPayed) {
                selectedDebtType.totalPayed = value + selectedDebtType.totalPayed;
            }

            if (isAnEstimation) {
                selectedDebtType.totalEstimated = value + selectedDebtType.totalEstimated;
            }

            selectedDebtType.total = value + selectedDebtType.total;
            acc.name = category;

            return acc;
        },
        {
            resources: {
                totalPayed: INITIAL_ZERO_VALUE,
                totalEstimated: INITIAL_ZERO_VALUE,
                total: INITIAL_ZERO_VALUE
            },
            ticket: {
                totalPayed: INITIAL_ZERO_VALUE,
                totalEstimated: INITIAL_ZERO_VALUE,
                total: INITIAL_ZERO_VALUE
            },
            creditCard: {
                totalPayed: INITIAL_ZERO_VALUE,
                totalEstimated: INITIAL_ZERO_VALUE,
                total: INITIAL_ZERO_VALUE
            }
        }
    );
}


function calculateTotalCosts() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    const incomeRange = sheet.getRange(FIRST_ROW, INCOME_COLUMN, MAX_DEBT_ROWS, UI_COLUMNS);
    const helthAndFoodRange = sheet.getRange(FIRST_ROW, HEALTH_AND_FOOD_COLUMN, MAX_DEBT_ROWS, UI_COLUMNS);
    const livingRange = sheet.getRange(FIRST_ROW, LIVING_COLUMN, MAX_DEBT_ROWS, UI_COLUMNS);
    const mobilityRange = sheet.getRange(FIRST_ROW, MOBILITY_COLUMN, MAX_DEBT_ROWS, UI_COLUMNS);
    const entertainmentRange = sheet.getRange(FIRST_ROW, ENTERTAINMENT_COLUMN, MAX_DEBT_ROWS, UI_COLUMNS);
    const petRange = sheet.getRange(FIRST_ROW, PET_COLUMN, MAX_DEBT_ROWS, UI_COLUMNS);
    const debtRange = sheet.getRange(FIRST_ROW, DEBT_COLUMN, MAX_DEBT_ROWS, UI_COLUMNS);

    const dataMap = new Map();

    dataMap.set('income', getCategorizedTotals(incomeRange, 'income'));
    dataMap.set('helthAndFood', getCategorizedTotals(helthAndFoodRange, 'helthAndFood'));
    dataMap.set('living', getCategorizedTotals(livingRange, 'living'));
    dataMap.set('mobility', getCategorizedTotals(mobilityRange, 'mobility'));
    dataMap.set('entertainment', getCategorizedTotals(entertainmentRange, 'entertainment'));
    dataMap.set('pet', getCategorizedTotals(petRange, 'pet'));
    dataMap.set('debt', getCategorizedTotals(debtRange, 'debt'));

    const generalTotal = {
        totalPayed: INITIAL_ZERO_VALUE,
        totalEstimated: INITIAL_ZERO_VALUE,
        totalCreditCard: INITIAL_ZERO_VALUE,
        totalTicket: INITIAL_ZERO_VALUE,
        total: INITIAL_ZERO_VALUE
    }

    dataMap.forEach((debtCategory, index) => {
        if (index !== 'income') {
            generalTotal.totalPayed += debtCategory.resources.totalPayed;
            generalTotal.totalEstimated += debtCategory.resources.totalEstimated;
            generalTotal.total += debtCategory.resources.total;
            generalTotal.totalCreditCard += debtCategory.creditCard.total;
            generalTotal.totalTicket += debtCategory.ticket.total;
        }
    });

    dataMap.set('total', generalTotal);

    return dataMap;
}


function setupTriggers() {
    ScriptApp
        .newTrigger('handleEdit')
        .forSpreadsheet(SPREAD_SHEET_ID)
        .onEdit()
        .create();
}


function updateView(dataMap) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // General Resources
    sheet.getRange(3, 8).setValue(dataMap.get('total').totalPayed);
    sheet.getRange(4, 8).setValue(dataMap.get('total').totalEstimated);
    sheet.getRange(5, 8).setValue(dataMap.get('total').total);

    // Credit Card
    sheet.getRange(3, 13).setValue(dataMap.get('total').totalCreditCard);

    // Ticket Balance
    const ticketBalance = dataMap.get('income').ticket.total - dataMap.get('total').totalTicket;
    sheet.getRange(4, 18).setValue(ticketBalance);

    // Current Balance
    const resourceBalance = dataMap.get('income').resources.totalPayed - dataMap.get('total').totalPayed;
    sheet.getRange(3, 18).setValue(resourceBalance);

    // Future Balance
    const totalDebts = dataMap.get('total').totalPayed + dataMap.get('total').totalEstimated;
    const totalEarnings = dataMap.get('income').resources.totalPayed + dataMap.get('income').resources.totalEstimated;

    const futureResourceBalance = totalEarnings - totalDebts;
    sheet.getRange(3, 23).setValue(futureResourceBalance);
}

function handleEdit(event) {
    if (event.range.getSheet().getName() !== 'Anual Pago') {
        const dataMap = calculateTotalCosts();
        updateView(dataMap);
    }
}

// Useful for debugging only...
function fakeCall () {

    const event = {
        range: {
            getColumn: () => 6
        }
    };

    calculate(event);
}
