import express from 'express';

import checkAuth from '../helper/token';

import Office from '../controller/officeController';

const router = express.Router();

const versionedapi = '/api/v1/offices/';

router.post(`${versionedapi}`, Office.createOffice);
router.get(`${versionedapi}`, Office.getAllOffices);
// router.get(`${versionedapi}:id`, Party.getPartyById);
// router.patch(`${versionedapi}:id/name`, Party.editPartyName);
// router.delete(`${versionedapi}:id`, Party.deleteParty);
router.post('/office/:id/register', checkAuth, Office.addNewCandidate);

export default router;
