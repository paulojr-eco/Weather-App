**Instruções para execução do programa em ambiente local**

**Programas necessários:** 

- pgAdmin - <https://www.pgadmin.org/> (preferencialmente última versão);
- Postgresql - <https://www.postgresql.org/>;
- Node.js -  <https://nodejs.org/en/download/>;
- Yarn - "npm i  -g yarn".
- Concurrently - "npm i -g concurrently"

**Referente ao Banco de Dados:** 

- Crie um banco de dados no postgres chamado "tech4humans".

**Refernete a instalação do App:**

- Faça o download do arquivo ZIP do projeto;
- Abra o terminal e direcioná-lo para o caminho do projeto;
- Entre na pasta do projeto – *cd teste-programacao-main*;
- Finalmente instale o projeto pelo comando: *yarn install*;
- Altere a variável "password", presente na linha 7 do arquivo situado no diretório: “app/src/server/dataBase”, para a senha definida por você na criação do banco de dados no postgresql;
- O arquivo presente em: “app/src/server/API” contém a url correspondente ao servidor. Altere-a caso necessário. 

**Execução do projeto:** 

- Estando na raiz do projeto: ‘teste-programacao-main/’, insira o comando "yarn start" no terminal. 
