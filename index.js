var express = require('express');
var mysql = require('mysql');


var connection = mysql.createConnection({
        host     : 'htdham.ciesfzx5ohll.eu-west-2.rds.amazonaws.com',
        user     : 'HTD',
        password : 'London123',
        port     : '3306',
        timeout: 90000
});  

connection.connect(function(err) {
        if (err) {
                console.error('error connecting: ' + err.stack);
                return;
        }else{
        console.log('connected as id ' + connection.threadId);
        return;
        }
});



connection.query('SELECT * FROM AlexaDB.Mobile WHERE model = "Iphone 7"',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
});
connection.end(function(error){
    //END CONNECTION
})