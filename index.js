const express = require('express');
const cors = require('cors');
const router = require('./api');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/', router);

// 何にも一致しなかった場合
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));


