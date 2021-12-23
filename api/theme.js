const express = require('express');

const router = express.Router();

const fs = require('fs');
const THEME_LIST_FILE = './theme_list.txt';
const RANDOM_THEME_FILE = './randomTheme.txt';

// テーマ取得
// GET  http://[HOST]:[PORT]/api/theme
router.get('/', async (req, res) => {
    try {
        const theme = fs.readFileSync(RANDOM_THEME_FILE, 'utf-8');
        const themeObj = {
            theme
        };
        res.json(themeObj);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

// テーマランダム設定
// POST  http://[HOST]:[PORT]/api/theme/random
router.post('/random', async (req, res) => {
    try {
        const fileValue = fs.readFileSync(THEME_LIST_FILE, 'utf-8');
        const themeList = fileValue.split('\r\n');
        const randomNumber = Math.floor( Math.random() * themeList.length );
        const theme = themeList[randomNumber];
        const themeObj = {
            theme
        };
        res.status(200).json(themeObj);
    } catch (e) {
        console.error(e);
        res.status(500).send();
    }
})

module.exports = router;
