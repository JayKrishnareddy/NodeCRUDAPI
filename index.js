const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

// Connection String to Database
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'Jay@10125',
    database : 'employeedb'
});

mysqlConnection.connect((err) => {
    if(!err) {
        console.log("Db Connection Succeed");
    }
    else{
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));
    }
});

app.listen(3000,()=> console.log("Express server is running at port no : 3000"));


//Get all Employees
app.get('/employees',(res,req)=>{
    mysqlConnection.query('SELECT * FROM Employee',(err,rows,fields)=>{
    if(!err) 
        console.log(rows);  
    
    else
        console.log(err);
    
})
});