const express = require('express');
const app = express();

const costumer = [];

app.post("/account",(req, res)=>{
    const {name, bi} = req.body;
    res.status(201).send();
});

app.listen(3333);