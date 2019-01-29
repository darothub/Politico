import express from 'express';

import Party from '../controller/partyController';

const router = express.Router();

const versionedapi = '/api/v1/';

router.post(`${versionedapi}parties`, Party.createParty);
router.get(`${versionedapi}parties`, Party.getAllParties);

export default router;
