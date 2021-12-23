const express = require('express');
const randomNumber = require('./random_number');
const theme = require('./theme');

const router = express.Router();

router.use('/randomnumber', randomNumber);
router.use('/theme', theme);

module.exports = router;
