const fs = require('fs');
const express = require('express');

let app = express();

let jsonData = JSON.parse(fs.readFileSync('./json/quiz.json' , 'utf8'));

app.get('/quiz/list', (req, res) => {
    return res.json(jsonData);
});

app.listen(8081, () => console.log(123));