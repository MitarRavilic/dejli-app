import cors from 'cors';
import express, { Response, Request } from 'express';
import * as db from './database/DB';
import { indexRouter } from './api/index';
import morgan from 'morgan';
import { AuthController } from './api/controllers/AuthController';

const app = express();

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/', indexRouter);

// app.use('/auth', AuthController.getInstance().initializeRoutes());

const port = 3000;

app.set('port', process.env.port || port);

// == MongoDB connect ==
db.initDB();



app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on ${port}`);
});
