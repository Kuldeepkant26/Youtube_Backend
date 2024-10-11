const express = require('express');

const router = express.Router();;
const { getAllVideosController, uploadVideosController } = require('../Controllers/videocontroler');
router.get('/video', getAllVideosController);
router.post('/video', uploadVideosController);
module.exports = router