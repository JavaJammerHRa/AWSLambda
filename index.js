'use strict';
console.log('LOADING FUNCTION');
var express = require('express');
var mysql = require('mysql');


// exports.handler = function(event, context, callback) {
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
    //console.log('Received event:', JSON.stringify(event, null, 2));
    //console.log('value1 =', event.key1);
   //this will get the cheapest Iphone 7
connection.query('SELECT make , price FROM AlexaDB.Mobile WHERE model = "Iphone 7" AND price = (SELECT MIN(price) FROM AlexaDB.Mobile)',function(err,rows){
  if(err) throw err;
  console.log(rows);
console.log(rows[0].make);
console.log(rows[0].price);

  var cheapestPhone = rows[0].price;
  var output = 'The cheapest Iphone 7 is '+ cheapestPhone;
  console.log(output);

connection.end(function(error){
    //END CONNECTION
})

//     callback(null, output); // Echo back the first key value
    // or
    // callback("some error type"); 
    });
// };