import express from 'express';

import User from '../controller/userController';


const router = express.Router();

const versionedapi = '/auth/';


router.post(`${versionedapi}signup`, User.signup);


export default router;
