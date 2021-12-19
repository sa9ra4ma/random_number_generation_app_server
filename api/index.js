const express = require('express');
const randomNumber = require('./random_number');

const router = express.Router();

router.use('/randomnumber', randomNumber);

module.exports = router;
