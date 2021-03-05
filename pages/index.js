// pm2 start index.js --watch --ignore-watch="data/* sessions/*"  --no-daemon

const path = require('path');
const express = require('express');
const app = express();
var portNum = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/page2', (req, res) => {
    res.sendFile(`${__dirname}/public/page2_index.html`);
});

app.listen(portNum, () => {
    console.log(`Application listening on port ${portNum}!`);
});
