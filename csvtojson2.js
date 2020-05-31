var csv = require("csvtojson");
var jsonfile = require("jsonfile");
var path = require("path");
var fs = require("fs");
var async = require('async');

const file = './globe/test.json';
const covid19_global = './time_series_covid19_confirmed_global.csv';
const covid19_US = './time_series_covid19_confirmed_US.csv';


function task3(){
    csv().fromFile(covid19_US)
        .then(jsonObj => {
            var confirmed = Object.keys(jsonObj[0]).slice(-1)[0];
            for (var i = 0 ; i < jsonObj.length; i++){
                    if(jsonObj[i].Lat === '0.0' && jsonObj[i]['Long_'] === '0.0'){
                        continue;
                    }

                    if(i === (jsonObj.length-1)){
                        fs.writeFile(file,jsonObj[i].Lat +','+jsonObj[i]['Long_'] + ',' + parseFloat(jsonObj[i][confirmed]),{flag : 'a'},String);
                        console.log("finished.");
                        break;
                    }
                    fs.writeFile(file,jsonObj[i].Lat +','+jsonObj[i]['Long_'] + ',' + parseFloat(jsonObj[i][confirmed]) + ',',{flag : 'a'},String);
            }
        }).catch(err => {
            console.log(err);
        });
        console.log('task3');
    };

task3();
