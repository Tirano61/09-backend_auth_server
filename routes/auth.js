const { Router } = require('express');
const { googleAuth } = require('../controlles/auth');

const router = Router();



router.post('/google', googleAuth);






module.exports = router;