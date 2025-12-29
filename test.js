const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send('OK');
});

app.listen(5001, '0.0.0.0', () => {
    console.log('Test server running on 5001');
});
