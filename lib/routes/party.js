"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _partyController = _interopRequireDefault(require("../controller/partyController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var versionedapi = '/api/v1/parties/';
router.post("".concat(versionedapi), _partyController.default.createParty);
router.get("".concat(versionedapi), _partyController.default.getAllParties);
router.get("".concat(versionedapi, ":id"), _partyController.default.getPartyById);
router.patch("".concat(versionedapi, ":id/name"), _partyController.default.editPartyName);
router.delete("".concat(versionedapi, ":id"), _partyController.default.deleteParty);
var _default = router;
exports.default = _default;