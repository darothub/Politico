"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _officeController = _interopRequireDefault(require("../controller/officeController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var versionedapi = '/api/v1/offices/';
router.post("".concat(versionedapi), _officeController.default.createOffice);
router.get("".concat(versionedapi), _officeController.default.getAllOffices); // router.get(`${versionedapi}:id`, Party.getPartyById);
// router.patch(`${versionedapi}:id/name`, Party.editPartyName);
// router.delete(`${versionedapi}:id`, Party.deleteParty);

var _default = router;
exports.default = _default;