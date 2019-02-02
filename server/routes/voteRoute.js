import express from 'express';

import Vote from '../controller/voteController';

const router = express.Router();

const versionedapi = '/votes/';

router.post(`${versionedapi}`, Vote.addNewVote);

export default router;
