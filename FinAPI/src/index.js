const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();
app.use(express.json());

const customers = [];

const verifyIfExistsAccountBi = (req, res, next) =>{
    const {bi} = req.headers;
    const biAlreadyExists = customers.some((data) => bi === data.bi);
    if (biAlreadyExists) {
        return res.status(400).json({
            error: "BI already exists"
        })
    }
    return next();
}

app.post("/account",verifyIfExistsAccountBi,(req, res)=>{
    const {name, bi} = req.body;
    const id = uuidv4();

    customers.push({
        name, 
        bi, 
        id,
        statement:[]
    })
    res.status(201).send();
});

app.get("/statement",(req, res)=>{
    const {bi} = req.headers;
    const customer = customers.find((data)=> data.bi === bi);
    if (!customer) {
        return res.status(400).json({
            error: "customer not found"
        })
    }
    return res.status(200).json(customer);
})

app.listen(3333);