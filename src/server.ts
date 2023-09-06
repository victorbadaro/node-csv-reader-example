import 'dotenv/config';
import express from 'express';
import { routes } from './routes/index.routes';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use(routes);

app.listen(SERVER_PORT, () => console.log(`Server is now running at :${SERVER_PORT}...`));
