# node-csv-reader-example

[![README.md](https://img.shields.io/badge/-Read%20in%20English-brightgreen?style=for-the-badge)](./README.md)

## Índice
- [🧾 Sobre o projeto](#-sobre-o-projeto)
- [🚀 Principais tecnologias](#-principais-tecnologias)
- [💻 Como usar](#-como-usar)
- [👌 Requisições](#-requisições)

## 🧾 Sobre o projeto
Essa é uma aplicação apenas para exemplo que foi feita para experimentar a leitura de arquivos CSV. Você pode fazer tanto [requisições](#-requisições) para listar usuários, criar usuários como também (é claro) importar usuários a partir de um arquivo CSV.

## 🚀 Principais tecnologias
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [CSV Parse](https://csv.js.org/parse/)
- [Typescript](https://www.typescriptlang.org/)

_(Você pode ver todas as dependências do projeto no arquivo [package.json](./package.json))_

## 💻 Como usar
1. Faça o clone do projeto (você vai precisar de um [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
   $ git clone https://github.com/victorbadaro/node-csv-reader-example
   ```

2. Acesse o diretório correspondente:
   ```bash
   $ cd node-csv-reader-example
   ```

3. Instale as dependências:
   ```bash
   $ yarn
   # sinta-se livre para usar outro gerenciador de pacotes, mas talvez você queira usar o yarn uma vez que já existe um arquivo yarn.lock na raíz do projeto
   ```

4. Crie um arquivo `.env` na raíz do projeto com o mesmo conteúdo que está no arquivo [.env.example](./.env.example) e preencha as variáveis com os seus dados:<br />
   Por exemplo:<br />
   ![image](https://github.com/victorbadaro/node-csv-reader-example/assets/9096344/2e2d1cce-a7cb-44a3-9b88-6be360ffcf2e)

6. Inicie o servidor executando o script `dev`:
   ```bash
   $ yarn dev
   ```

## 👌 Requisições
Agora o servidor está pronto para receber suas requisições! Tem uma [request collection](./request_collection.json) na raíz do projeto para que você possa usar (utilize o [insomnia](https://insomnia.rest/) para importar a collection). Lembre-se de informar a porta do servidor na variável de ambiente `port` no seu rest client!<br />
Aqui estão as requisições que você pode fazer:

- GET /users
- POST /users
  ```json
  {
    "name": "",
    "email": ""
  }
  ```
- POST /users/import
	> Essa é uma requisição multipart. Lembre-se de selecionar um arquivo CSV (você pode usar o arquivo [users.csv](./users.csv) também)
---

<p align="center">Este projeto foi criado e desenvolvido com ❤ por <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
