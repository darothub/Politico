"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _party = _interopRequireDefault(require("../routes/party"));

var _office = _interopRequireDefault(require("../routes/office"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = process.env.PORT || 8080;
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_party.default);
app.use(_office.default);
app.get('/', function (req, res) {
  res.status(200).json({
    status: 200,
    message: 'Hello World'
  });
});
app.use(function (req, res, next) {
  var error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500).json({
    status: error.status,
    message: error.message
  });
  next();
});
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});
module.exports = app;