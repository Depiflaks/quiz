const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

let jsonData = JSON.parse(fs.readFileSync('quiz.json' , 'utf8'));

app.get('/quiz/list', (req, res) => {
    return res.json(jsonData);
});


app.listen(8081, () => console.log('Listening...'));
