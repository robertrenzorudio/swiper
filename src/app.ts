import dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import express from 'express';
import { authRouter, findRouter, shopRouter } from './routes';

const app = express();
app.use('/auth', authRouter);
app.use('/find', findRouter);
app.use('/shop', shopRouter);
app.get('/', (_, res) => {
  res.send('Hello World!');
});

export default app;
