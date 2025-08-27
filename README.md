![Logo_OrcAumento.png](docs/Logo_OrcAumento.png)

OrçAumento é uma planilha simples e poderosa para controle de finanças pessoais, desenvolvida com **Google Sheets** e **Google Apps Script**. 

Qualquer pessoa pode copiar o modelo para sua própria conta do Google e gerenciar suas finanças de forma segura, compartilhada com seus conjuges e gratuita eternamente, com serviços e seguranças garantidos pelo Google.

## TL;DR
Sem paciência para ler tudo? Sem problemas, veja o [vídeo demo]() antes e continue a leitura caso tenha interesse.

## Funcionalidades
- Registro de multiplos tipos de entrada e saída financeiras, como Salário, Ticket Refeição/Alimentação e Cartão de crédito.
- Interface amigável e intuitiva, em ambiente Excel/Google Sheets no navegador.
- Permite copiar e colar do diretamente do extrato do banco.
- Possui duas abstrações de controle: **Futura** e **Realizada**, permitindo vizualizar o orçamento batendo com o saldo no banco atual e o que está previsto para o futuro.
- Categorias de despesas personalizáveis, para idientificar de forma clara onde o dinheiro está sendo gasto.
- Relatórios mensais e anuais, permitindo uma visão mais ampla das finanças e planejamento futuro para prever o que sobrará para investir ou amortizar dívidas.
- Destaques em cor **vermelha** para despesas que **ultrapassam** o orçamento planejado.

## Como Começar
1. **Copie o Modelo**
    - Acesse o [modelo do Google Sheets](https://docs.google.com/spreadsheets/d/17MhlvqHSK9Kn77OVlv7ef8I9m5F5_F9fGlLfCWd0EIE).
    - Clique em `Arquivo` \> `Fazer uma cópia` para salvá-lo na sua conta pessoal do Google Drive.
    - Dê um nome à sua cópia e escolha a pasta onde deseja salvá-la. A partir daqui, apenas você terá acesso ao seu próprio arquivo e os dados nele.
    > ⚠️ **Importante:** Apenas compartilhe o arquivo com pessoas de confiança, pois elas terão acesso total ao conteúdo da planilha.
    O que pode ser bom para, por exemplo, um cônjuge ou parceiro financeiro.


2. **Configure o Apps Script**
    - No arquivo copiado, vá no menu superior em `Extensões` \> `Apps Script`.
    - Isso abrirá o editor do Apps Script em uma nova aba. Remova qualquer código existente no editor.
    - Copie e cole o conteúdo do arquivo [script.js](script.js), no editor do Apps Script.


3. **Autorize o Script a se integrar com sua Conta do google**
  - Cole o código único da URL da **SUA** planilha, neste trecho `const SPREAD_SHEET_ID = ' Coloque aqui o ID da sua planilha';` do arquivo `./script.js` 
    > #### ℹ️ Onde encontrar o código único?
    > - Na URL do arquivo que vc copiou, por exemplo na URL do template https://docs.google.com/spreadsheets/d/17MhlvqHSK9Kn77OVlv7ef8I9m5F5_F9fGlLfCWd0EIE, o código é o `17MhlvqHSK9Kn77OVlv7ef8I9m5F5_F9fGlLfCWd0EIE`.
  - Clique em `Salvar` (ícone de disquete).
  - Selecione o método setupTriggers (Veja a seta na imagem a seguir)
  - Execute-o ⚠️ apenas uma vez. (Também indicado pela seta na imagem a seguir).
    - ![img.png](docs/setupTriggers.png) 

  > [!WARNING]
  > ⚠️ Caso execute mais de uma vez, o script criará múltiplos gatilhos (triggers) e isso deixará a execução lenta ao editar a planilha.
  > Para corrigir, Você terá que apagar manualmente os gatilhos duplicados no gerenciador do Apps Script ou recomeçar o processo do zero.

3. **Autorize o Script**
    - Quando executar o método `setupTriggers`, descrito no passo anterior, será necessário autorizar o script na sua conta do Google.
    - Siga as instruções exibidas na tela de login do Google, autorizando tudo o que for solicitado.


4. **Pronto!**
    - 🍀 Agora você pode começar a usar a planilha para gerenciar suas finanças pessoais, ao adicionar valores os gatilhos serão acionados automaticamente para atualizar os relatórios e resumos.
    - Lembre-se de atualizar regularmente suas entradas e saídas financeiras para manter o controle atualizado.

## Mas é seguro?
Sim! ✅ O código do Apps Script que você utilizará é bem simples, aberto e pode ser revisado por qualquer pessoa que saiba um pouco de Java Script.

Ele não coleta ou compartilha seus dados com terceiros e, o acesso ao seu conteúdo, é o seu próprio acesso proveniente da sua conta do Google.

Apenas você pode vê-lo, a menos que você decida compartilhar com alguém de sua confiança.

Diferente de outros apps pagos de finanças pessoais, que armazenam seus dados em servidores de terceiros, que se conectam com bancos e instituições financeiras, 
e que, com certeza ao menos os próprios desenvolvedores do app podem acessar seus dados - este método é o mais seguro e privado que encontrei.

## Como Usar
Veja como funciona no vídeo demo a seguir:

[![Watch the video](https://img.youtube.com/vi/laVMz79v_1Q/maxresdefault.jpg)](https://youtu.be/laVMz79v_1Q)

## Suporte
Para dúvidas ou sugestões, entre em contato com o responsável [romulobordezani@gmail.com](mailto:romulobordezani@gmail.com) ou abra uma [issue](https://github.com/romulobordezani/orcAumento/issues) aqui no GitHub.

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir fazer forks, abrir pull requests com melhorias ou correções e etc.

## Licença
Este projeto está licenciado sob a Licença MIT. Use a vontade.

## Agradecimentos
Agradeço a todos que contribuíram com ideias, sugestões e feedbacks para melhorar esta planilha. 

E principalmente a você que chegou e com certeza vai me dar uma estrela ⭐️ aqui no GitHub, para ajudar a divulgar o projeto e incentivar a continuidade do desenvolvimento.
