var pdfFiller   = require('pdffiller');
var express = require('express');
const pdftk = require('node-pdftk');

var app = express();

var sourcePDF = "pan.pdf";
var destinationPDF =  "pann.pdf";
var data = {
    'AO_Code' : '555' +' ' + 'ww'+' ' + '6'+' ' + '6',
    'last_name' : 'Dash',
    'first_name' : 'Sumit',
    'middle_name' : 'Kumar',
    'day' : '13',
    'month' : '01',
    'year' : '1999',
    'abbreviation1' : 'Sumit' + " " + 'kum'+ " " + 'Dash',
    'genderData' : 'male',
    'flname' : 'Dash',
    'ffname' : 'Subrat',
    'fmname' : 'Kumar',
    'afc' : 'kkkk',
    'village' : 'suhmro',
    'po' : 'Andsddnsdd',
    'locality' : 'dfhdfhjdk',
    'district' : 'ghdgfhfd',
    'pin' : '751015',
    'state' : 'Odisha',
    'country' : 'India',
    'mobile' : '+91         '+'9853174100',
    'email' : 'kumardash1@gmail.com',
    'aadharnumber' : 'djhdvfbhnkfdhbf',
    'nameAsAadhar' : 'cdjhgdhjfkdlf',
    'idProof' : 'cgdhjvbhc',
    'addProof' : 'dkjbhjdvdv',
    'dobProof' : 'dfhuygdfhdf',
    'signName' : 'sljfhgvhbdj',
    'place' : 'dhufgdhfjd',
    'Date' : '22/10/2020',
    'self' : 'self'

};



app.get('/', async (req, res) => {
    pdftk
    .input('./pan.pdf')
    .fillForm(data)
    .output()
    .then(buf => {
        res.type('application/pdf'); // If you omit this line, file will download
        res.send(buf);
    })
    .catch(err => {
        // handle errors
    });
    
})

var port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
