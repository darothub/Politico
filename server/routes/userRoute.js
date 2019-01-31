import express from 'express';

import User from '../controller/userController';


const router = express.Router();

const versionedapi = '/auth/';

<<<<<<< HEAD
router.post(`${versionedapi}signup`, User.signup);
router.post(`${versionedapi}signin`, User.signin);
=======

router.post(`${versionedapi}signup`, User.signup);
>>>>>>> user can signup


export default router;
