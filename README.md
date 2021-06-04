**Instruções para execução do programa em ambiente local**

**Programas necessários:** 

- pgAdmin - <https://www.pgadmin.org/> (preferencialmente última versão);
- Postgresql - <https://www.postgresql.org/>;
- Node.js -  <https://nodejs.org/en/download/>;
- Yarn - "npm i  -g yarn".

**Referente ao Banco de Dados:** 

- Crie um banco de dados no postgres chamado "tech4humans".

**Refernete a instalação do App:**

- Faça o download do arquivo clone do projeto;
- Abra o terminal e direcioná-lo para o caminho do projeto;
- Entre na pasta do projeto – *cd app*;
- Finalmente instale o projeto pelo comando: *yarn install*;
- Altere a variável "password", presente na linha 7 do arquivo situado no diretório: “app/src/server/dataBase”, para a senha definida por você na criação do usuário do postgresql;
- O arquivo presente em: “app/src/server/API” contém a url correspondente. Altere-a caso necessário. 

**Execução do projeto:** 

- Estando na raiz do projeto: ‘teste-programacao/’, insira o comando "yarn start" no terminal. 
