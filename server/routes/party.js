import express from 'express';

import Party from '../controller/partyController';

const router = express.Router();

const versionedapi = '/api/v1/parties/';

router.post(`${versionedapi}`, Party.createParty);
router.get(`${versionedapi}`, Party.getAllParties);
router.get(`${versionedapi}:id`, Party.getPartyById);
router.patch(`${versionedapi}:id/name`, Party.editPartyName);
router.delete(`${versionedapi}:id`, Party.deleteParty);

export default router;
