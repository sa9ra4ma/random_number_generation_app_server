const express = require('express');

const router = express.Router();

// 乱数取得
// GET  http://localhost:3000/api/randomnumber
router.get('/', async (req, res) => {
    try {
        const randomNumberList = [13,67,33,55,90];
        res.json(randomNumberList);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

// 乱数発行
// POST  http://localhost:3000/api/randomnumber
router.post('/', async (req, res) => {
    try {
        res.status(200).send();
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

module.exports = router;
