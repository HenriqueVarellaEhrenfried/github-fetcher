# Git Fetcher

Este softwre foi desenvolvido utilizando o paradigma de microserviços. Neste paradigma o frontend é separado do backend. Para desenvolver esta aplicação tanto o backend quanto o frontend foi utilizado node.

Portanto é preciso que você tenha Node instalado na sua máquina.

## Backend

No backend foi utilizado Express.js e PostgreSQL para criar o REST server. Para realizar os testes foi utilizado Chakram.js.

Primeira utilização:

* Entre no diretório do projeto

    `cd backend`

* Instale as dependências

    `npm install`

* Crie o banco de dados

    `psql -U postgres -f database.sql -h localhost`

* Para rodar o servidor

    `npm start`

* Para executar os testes

    `npm test`


## Frontend

No frontend foi utilizado React.js,  react-materialize.js e axios.js para criar a página web. Para realizar os testes foi utilizado Jest.js.

Primeira utilização:

* Entre no diretório do projeto

    `cd backend`

* Instale as dependências

    `npm install`

* Para rodar o servidor

    `npm start`

* Para executar os testes

    `npm test`
