import express from 'express';
import './database';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World!' }));

app.listen(3333);
