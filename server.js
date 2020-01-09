// var express = require('express');
// var app = express();
// var mysql = require('mysql');
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({type:'aplication/json'}));

// app.use(bodyParser.urlencoded({extended:true}));

// var con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'tr_users'
// });

// var server =app.listen(9090,function(){
//     var host = server.address().address
//     var port = server.address().port

//     console.log("server start");
// });

// con.connect(function(error){
//     if(!!error)console.log('error');
//     else console.log('connected');
// });

// app.get('/users',function(req,res){
//     con.query('SELECT*FROM users',function(error,rows,fields){
//         if(!!error)console.log('error');
//         else{
//             console.log(rows);
//             res.send(rows);
//         }
//     });
// })
