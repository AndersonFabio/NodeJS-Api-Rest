const express = require('express');
const router = express.Router();

const UploadController = require('../controller/UploadController'); 


router.post('/', UploadController.upload);

module.exports = router; 