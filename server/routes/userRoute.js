import express from 'express';

import User from '../controller/userController';


const router = express.Router();

const versionedapi = '/auth/';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
router.post(`${versionedapi}signup`, User.signup);
router.post(`${versionedapi}signin`, User.signin);
=======

router.post(`${versionedapi}signup`, User.signup);
>>>>>>> user can signup
=======
router.post(`${versionedapi}signup`, User.signup);
router.post(`${versionedapi}signin`, User.signin);
>>>>>>> user can sign in
=======
router.post(`${versionedapi}signup`, User.signup);
router.post(`${versionedapi}signin`, User.signin);
>>>>>>> 87ebec8bd94fed4a26abb8b3a26b2a2706d846bf


export default router;
