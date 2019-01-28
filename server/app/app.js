import express from 'express';

import bodyParser from 'body-parser';

import morgan from 'morgan';

import partyRoutes from '../routes/party';

const app = express();
const PORT = process.env.PORT || 9000;


app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(partyRoutes);

app.get('/', (req, res) => {
  res.json = ({
    status: 200,
    message: 'Hello World',
  });
});

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    status: 500,
    message: error.message,
  });
  next();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
