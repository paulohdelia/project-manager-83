import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import cors from 'cors';

import './config/env';

import './database';
import routes from './routes';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    console.error(err);
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3333);
