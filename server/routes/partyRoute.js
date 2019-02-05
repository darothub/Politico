import express from 'express';

import Party from '../controller/partyController';

import checkAuth from '../helper/token';

const router = express.Router();

process.env.NODE_ENV = 'test';

const versionedapi = '/api/v1/parties/';

router.post(`${versionedapi}`, checkAuth, Party.createParty);
router.get(`${versionedapi}`, Party.getAllParties);
router.get(`${versionedapi}:id`, Party.getPartyById);
router.patch(`${versionedapi}:id/name`, checkAuth, Party.editPartyName);
router.delete(`${versionedapi}:id`, checkAuth, Party.deleteParty);

export default router;
