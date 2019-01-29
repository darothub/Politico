import express from 'express';

import Party from '../controller/partyController';

const router = express.Router();

const versionedapi = '/api/v1/';

router.post(`${versionedapi}parties`, Party.createParty);

export default router;
