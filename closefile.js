var csv = require("csvtojson");
var jsonfile = require("jsonfile");
var path = require("path");
var fs = require("fs");
var async = require('async');

const file = './globe/test.json';
const covid19_global = './time_series_covid19_confirmed_global.csv';
const covid19_US = './time_series_covid19_confirmed_US.csv';


function task4(){
    fs.writeFile(file,']\n    ]\n]',{flag : 'a'},String);
    console.log('task4');
};


task4();