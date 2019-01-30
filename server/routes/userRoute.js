import express from 'express';

import Test from '../controller/userController';

const router = express.Router();

const versionedapi = '/api/v1/parties/';

// router.post(`${versionedapi}`, Office.createOffice);
router.get(`${versionedapi}`, Test.getAllParties);
// router.get(`${versionedapi}:id`, Party.getPartyById);
// router.patch(`${versionedapi}:id/name`, Party.editPartyName);
// router.delete(`${versionedapi}:id`, Party.deleteParty);

export default router;
