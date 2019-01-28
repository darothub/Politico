import express from 'express';

import Party from '../controller/partyController';

const router = express.Router();

const versionedapi = '/api/v1/parties/';

router.post(`${versionedapi}`, Party.createParty);
router.get(`${versionedapi}`, Party.getAllParties);
router.get(`${versionedapi}:id`, Party.getPartyById);

export default router;
