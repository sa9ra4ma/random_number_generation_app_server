const express = require('express');

const router = express.Router();

const fs = require('fs');
const RANDOM_NUMBERS_FILE = './randomNumber.csv';

// 乱数取得
// GET  http://[HOST]:[PORT]/api/randomnumber
router.get('/', async (req, res) => {
    try {
        const fileValue = fs.readFileSync(RANDOM_NUMBERS_FILE, 'utf-8');
        console.log(fileValue)
        res.json(randomNumberList);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

// 乱数発行
// POST  http://[HOST]:[PORT]/api/randomnumber
router.post('/', async (req, res) => {
    try {
        const randomNumberList = [];
        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.floor( Math.random() * 100 ) + 1;
            if (randomNumberList.includes(randomNumber)) {
                i--;
                continue;
            }
            randomNumberList.push(randomNumber);
        }
        const randomNumberStr = randomNumberList.join(',');
        fs.writeFileSync(RANDOM_NUMBERS_FILE, randomNumberStr, 'utf-8');
        res.status(200).send();
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

module.exports = router;
