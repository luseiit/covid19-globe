var csv = require("csvtojson");
var jsonfile = require("jsonfile");
var path = require("path");
var fs = require("fs");
var async = require('async');

const file = 'test.json';


function task1(){
    fs.writeFile(file,'[\n    [\n    \"Confirmed\", [',{flag : 'w+'},String);
    console.log('task1');
};

task1();
