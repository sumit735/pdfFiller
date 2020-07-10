var pdfFiller   = require('pdffiller');

var sourcePDF = "pan.pdf";
var destinationPDF =  "pann.pdf";
var data = {
    "last_name" : "John",
    "first_name" : "Doe",
    "date" : "Jan 1, 2013",
    "football" : "Off",
    "baseball" : "Yes",
    "basketball" : "Off",
    "hockey" : "Yes",
    "nascar" : "Off"
};
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

  pdfFiller.fillForm( sourcePDF, destinationPDF, data, function(err) {
    if (err) throw err;
    console.log("In callback (we're done).");
});