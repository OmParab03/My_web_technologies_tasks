const express = require('express');
const mysql= require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student'
});

db.connect((err)=>{
    if(err){
        console.log('Error connecting to database', err);
    }
    else{
        console.log('Connected to database');
    }
});

app.post("/products", (req, res) => {
    const { product_name, price, category, quantity } = req.body;

    const sql = "INSERT INTO products (product_name, price, category, quantity) VALUES (?, ?, ?, ?)";

    db.query(sql, [product_name, price, category, quantity], (err, result) => {
        if (err) res.send(err);
        else res.send("Product added successfully");
    });
});

app.get("")