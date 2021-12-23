const express = require('express');

const router = express.Router();

const fs = require('fs');
const THEME_FILE = './theme.txt';

// テーマランダム取得
// GET  http://[HOST]:[PORT]/api/theme/random
router.get('/random', async (req, res) => {
    try {
        const fileValue = fs.readFileSync(THEME_FILE, 'utf-8');
        const themeList = fileValue.split('\r\n');
        const randomNumber = Math.floor( Math.random() * themeList.length );
        const themeObj = {
            theme: themeList[randomNumber]
        };
        res.json(themeObj);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

module.exports = router;
