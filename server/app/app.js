import express from 'express';

import bodyParser from 'body-parser';

import morgan from 'morgan';

import partyRoutes from '../routes/partyRoute';

import officeRoutes from '../routes/officeRoute';

import userRoute from '../routes/userRoute';

import voteRoute from '../routes/voteRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(partyRoutes);
app.use(officeRoutes);
app.use(userRoute);
app.use(voteRoute);

app.get('/', (req, res) => {
  res.status(200).json({
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
  if (error.message === 'jwt must be provided') {
    res.status(401).json({
      status: 401,
      message: 'You are not authorized',
    });
  }
  next();
});
app.use((error, req, res, next) => {
  res.sendStatus(error.status || 500).json({
    status: error.status,
    message: error.message,
  });
  next();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
