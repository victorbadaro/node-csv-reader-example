# node-csv-reader-example

[![LEIAME.md](https://img.shields.io/badge/-Leia%20em%20Portugu%C3%AAs-brightgreen?style=for-the-badge)](./LEIAME.md)

## Summary
- [🧾 About](#-about)
- [🚀 Main technologies](#-main-technologies)
- [💻 Usage](#-usage)
- [👌 Requests](#-requests)

## 🧾 About
This is an example app that was made to try CSV file reading. You can make [requests](#-requests) to list users, create users and (of course) import users from a CSV file.

## 🚀 Main technologies
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- [CSV Parse](https://csv.js.org/parse/)
- [Typescript](https://www.typescriptlang.org/)

_(You can see all the dependencies in the [package.json](./package.json) file)_

## 💻 Usage
1. Clone the project (you'll need a [personal access token](https://docs.github.com/pt/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls)):
   ```bash
   $ git clone https://github.com/victorbadaro/node-csv-reader-example
   ```

2. Access its directory:
   ```bash
   $ cd node-csv-reader-example
   ```

3. Install its dependencies:
   ```bash
   $ yarn
   # feel free to use another package manager, but you might want use yarn once there's already a yarn.lock file in the root directory
   ```

4. Create a `.env` file in the root directory with the same content that is in the [.env.example](./.env.example) file and fill the variables with your own data:<br />
   For example:<br />
   ![image](https://github.com/victorbadaro/node-csv-reader-example/assets/9096344/2e2d1cce-a7cb-44a3-9b88-6be360ffcf2e)

5. Start the server by running the `dev` script:
   ```bash
   $ yarn dev
   ```

## 👌 Requests
Now the server is ready to receive your requests! There's a [request collection](./request-collection.json) in the root directory so you can use (use [insomnia](https://insomnia.rest/) to import the collection). Remember to inform the server port in the `port` environment variable in your rest client software!<br />
Here are the requests you can make:

- GET /users
- POST /users
  ```json
  {
    "name": "",
    "email": ""
  }
  ```
- POST /users/import
	> This is a multipart request. Remember to select a CSV file (you can use the [users.csv](./users.csv) file as well)
---

<p align="center">This project was created and developed with ❤ by <a href="https://github.com/victorbadaro">Victor Badaró</a></p>
