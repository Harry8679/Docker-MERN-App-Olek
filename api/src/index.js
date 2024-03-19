const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send('Our Api Server is working correctly');
});

app.listen(5600, () => {
    console.log('Started api service');
});