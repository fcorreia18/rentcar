const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();
app.use(express.json());

const customers = [];


app.post("/account",(req, res)=>{
    const {name, bi} = req.body;
    const id = uuidv4();

    const biAlreadyExists = customers.some((data) => bi === data.bi);
    if (biAlreadyExists) {
        return res.status(400).json({
            error: "BI already exists"
        })
    }
    customers.push({
        name, 
        bi, 
        id,
        statement:[]
    })
    res.status(201).send();
});

app.get("/statement/:bi",(req, res)=>{
    const {bi} = req.params;
    const customer = customers.find((data)=> data.bi === bi);
    if (!customer) {
        return res.status(400).json({
            error: "customer not found"
        })
    }
    return res.status(200).json(customer);
})

app.listen(3333);