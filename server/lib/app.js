"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.json());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
var PORT = process.env.PORT || 9000;
app.get('/', function (req, res) {
  res.json({
    message: 'Hello World'
  });
});
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});