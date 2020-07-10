const express = require('express');
const pdftk = require('node-pdftk');

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    
    res.send('Unauthorized Access.')
    
});

app.post('/generatePdf', (req, res) => {
    const data = JSON.parse(req.body.data);
    console.log(data);
    pdftk
    .input('./pan.pdf')
    .fillForm(data)
    .output()
    .then(buf => {
        res.type('application/pdf'); // If you omit this line, file will download
        res.send(buf);
    })
    .catch(err => {
        
    });
});

var port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
