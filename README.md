![Logo_OrcAumento.png](docs/Logo_OrcAumento.png)

OrçAumento é uma planilha simples e poderosa para controle de orçamento e finanças pessoais, desenvolvida com **Google Sheets** e **Google Apps Script**. 

Qualquer pessoa pode copiar o modelo para sua própria conta do Google e começar a gerenciar suas finanças de forma prática.

## Funcionalidades

- Registro de multiplos tipos de entrada e saída financeiras, como Salário, Ticket Refeição e Cartão de crédito
- Interface amigável e intuitiva, permitindo copiar e colar do extrato do banco, numa planilha de Google Sheets, que pode ser acessada de qualquer lugar e de graça.
- Duas abstrações de controle: Futura e Realizada, permitindo vizualizar o orçamento planejado e o realizado
- Categorias personalizáveis
- Relatórios mensais e anuais

## Como Começar

1. **Copie o Modelo**
    - Acesse o [modelo do Google Sheets](https://docs.google.com/spreadsheets/d/17MhlvqHSK9Kn77OVlv7ef8I9m5F5_F9fGlLfCWd0EIE).
    - Clique em `Arquivo` \> `Fazer uma cópia` para salvar na sua conta do Google Drive.

2. **Configure o Apps Script**
    - No arquivo copiado, vá no menu superior em `Extensões` \> `Apps Script`.
    - Isso abrirá o editor do Apps Script em uma nova aba. Remova qualquer código existente no editor.
    - Copie e cole o conteúdo do arquivo [script.js](script.js), no editor do Apps Script.

3 - **Autorize o Script a se integrar com sua Conta dop google**
  - Insira o código único da URL da **SUA** planilha, a que copiou do Modelo, em: `./script.js` > `const SPREAD_SHEET_ID = ' Coloque aqui o ID da sua planilha';`
    > #### Exemplo de como encontrar o código:
    > - Na URL do template https://docs.google.com/spreadsheets/d/17MhlvqHSK9Kn77OVlv7ef8I9m5F5_F9fGlLfCWd0EIE, o código é o `17MhlvqHSK9Kn77OVlv7ef8I9m5F5_F9fGlLfCWd0EIE`.
  - Clique em `Salvar` (ícone de disquete).
  - Selecione o método setupTriggers
  - Execute-o ⚠️ apenas uma vez.
  - Veja a imagem abaixo:
    - ![img.png](docs/setupTriggers.png) 

  > [!WARNING]
  > Caso execute mais de uma vez, o script criará múltiplos gatilhos (triggers) e isso deixará a execução lenta.
  > Você terá que apagar manualmente os gatilhos duplicados ou recomeçar o processo.

3. **Autorize o Script**
    - Na primeira utilização, será necessário autorizar o script. Siga as instruções exibidas na tela de login do Google, autorizando tudo o que for solicitado.

## Mas é seguro?
Sim! ✅ O código do Apps Script é aberto e pode ser revisado por qualquer pessoa.

Ele não coleta ou compartilha seus dados com terceiros e o acesso ao seu conteúdo é o seu próprio acesso da sua conta do Google.

## Como Usar
Veja como funciona no vídeo a seguir:

[![Watch the video](https://img.youtube.com/vi/laVMz79v_1Q/maxresdefault.jpg)](https://youtu.be/laVMz79v_1Q)

## Suporte

Para dúvidas ou sugestões, entre em contato com o responsável [romulobordezani@gmail.com](mailto:romulobordezani@gmail.com) ou abra uma issue.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir pull requests com melhorias ou correções.
