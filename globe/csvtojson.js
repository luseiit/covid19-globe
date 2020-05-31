var csv = require("csvtojson");
var path = require('path');
var __parentDir = path.dirname(process.mainModule.filename);

console.log(__parentDir);


var csvFilePath= '<./time_series_covid19_confirmed_global.csv>'; //file path of csv
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

