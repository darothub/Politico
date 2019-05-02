import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import errorhandler from 'errorhandler';
import partyRoutes from '../routes/partyRoute';
import officeRoutes from '../routes/officeRoute';
import userRoute from '../routes/userRoute';
import voteRoute from '../routes/voteRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(errorhandler());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


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
  const obj = { success: false };
  if (req.method) {
    obj.msg = 'request is not supported';
  } else {
    obj.msg = 'Invalid URL';
  }
  res.status(404).json(obj);
  next();
});

app.use((error, req, res, next) => {
  if (error.message === 'jwt must be provided') {
    res.status(401).json({
      status: 401,
      message: 'You are not authorized',
    });
  }
  if (error.message === 'invalid signature') {
    res.status(400).json({
      status: 400,
      message: 'Invalid token',
    });
  }
  if (error instanceof SyntaxError) {
    res.status(400).json({
      error: 'Invalid JSON',
    });
  }
  if (error.status === 404) {
    res.json({
      status: 404,
      message: 'Resource not found',
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
