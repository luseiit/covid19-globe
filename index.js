var express = require('express');
var app = express();
var shell = require('shelljs');

//shell.exec('./get_updates.sh');

app.listen(8081,function(){
    console.log("starting server on 8081");
});

app.use(express.static('third-party'));
app.use(express.static('globe'));
app.use(express.static('Common'));


app.get('/',function(req,res){
    res.sendfile(__dirname + "/main.html");
});


app.get('/hw3',function(req,res){
    res.sendfile(__dirname + "/hw3.html");
});

