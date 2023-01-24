const express = require('express');
const app = express();

const host = 5000;

app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

app.get('/apply', (req, res) => {
    res.send({ apply: 'here' });
});

app.get('/dashboard', (req, res) => {
    res.send({ dashboard: 'applicants' });
});

app.listen(host);
console.log(`Server running on port: ${host}`);