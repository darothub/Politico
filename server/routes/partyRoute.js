import express from 'express';

import Party from '../controller/partyController';

import checkAuth from '../helper/token';

const router = express.Router();

const versionedapi = '/api/v1/parties/';

router.post(`${versionedapi}`, checkAuth, Party.createParty);
router.get(`${versionedapi}`, Party.getAllParties);
router.get(`${versionedapi}:id`, Party.getPartyById);
router.patch(`${versionedapi}:id/name`, Party.editPartyName);
router.delete(`${versionedapi}:id`, Party.deleteParty);

export default router;
