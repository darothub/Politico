import express from 'express';

import User from '../controller/userController';


const router = express.Router();

const versionedapi = '/auth/';

router.post(`${versionedapi}signup`, User.signup);
router.post(`${versionedapi}signin`, User.signin);



export default router;
