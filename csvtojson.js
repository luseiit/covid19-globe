var csv = require("csvtojson");
var jsonfile = require("jsonfile");
var path = require("path");
var fs = require("fs");
var async = require('async');

const file = './globe/test.json';
const covid19_global = './time_series_covid19_confirmed_global.csv';
const covid19_US = './time_series_covid19_confirmed_US.csv';

function wait(msecs)
{
    var start = new Date().getTime();
    var cur = start;
    while(cur - start < msecs)
    {
    cur = new Date().getTime();
    }
}

/*
function task1(){
    fs.writeFile(file,'[\n    [\n    \"Confirmed\", [',{flag : 'w+'},String);
    console.log('task1');
};
*/

function task2(){
csv().fromFile(covid19_global)
    .then(jsonObj => {
        var confirmed = Object.keys(jsonObj[0]).slice(-1)[0];
        for (var i = 0 ; i < jsonObj.length; i++){
                fs.writeFile(file,jsonObj[i].Lat +','+jsonObj[i].Long + ',' + parseFloat(jsonObj[i][confirmed]) + ',',{flag : 'a'},String);
        }
    }).catch(err => {
        console.log(err);
    });
    console.log('task2');
};

/*
function task3(){
    csv().fromFile(covid19_US)
        .then(jsonObj => {
            var confirmed = Object.keys(jsonObj[0]).slice(-1)[0];
            for (var i = 0 ; i < jsonObj.length; i++){
                    fs.writeFile(file,jsonObj[i].Lat +','+jsonObj[i].Long + ',' + jsonObj[i][confirmed] + ',',{flag : 'a'},String);
            }
        }).catch(err => {
            console.log(err);
        });
        console.log('task3');
        check = true;
    };
*/

/*
function task4(){
    fs.writeFile(file,']\n    ]\n]',{flag : 'a'},String);
    console.log('task4');
};
*/

//task1();
task2();
//task3();
//task4();