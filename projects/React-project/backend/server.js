const express = require('express');
const mysql= require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());


const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'productdb'
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

app.get("/products", (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, results) => {
        if (err) res.send(err);
        else res.json(results);
    });
});

app.put("/products/:id", (req, res) => {
    const { product_name, price, category, quantity } = req.body;
    const { id } = req.params;

    const sql = "UPDATE products SET product_name=?, price=?, category=?, quantity=? WHERE id=?";

    db.query(sql, [product_name, price, category, quantity, id], (err, result) => {
        if (err) res.send(err);
        else res.send("Product updated successfully");
    });
});

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM products WHERE id=?", [id], (err, result) => {
        if (err) res.send(err);
        else res.send("Product deleted successfully");
    });
});


app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
});