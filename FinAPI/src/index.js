const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();
app.use(express.json());

const costumer = [];

app.post("/account",(req, res)=>{
    const {name, bi} = req.body;
    const id = uuidv4();

    const biAlreadyExists = costumer.some((data) => bi === data.bi);
    if (biAlreadyExists) {
        return res.status(400).json({
            error: "BI already exists"
        })
    }
    costumer.push({
        name, 
        bi, 
        id,
        statement:[]
    })
    res.status(201).send();
});

app.listen(3333);