const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();
app.use(express.json());

const customers = [];

const verifyIfExistsAccountBi = (req, res, next) =>{
    const {bi} = req.headers;
    const customer = customers.find((data)=> data.bi === bi);
    if (!customer) {
        return res.status(400).json({
            error: "customer not found"
        })
    }

    req.customer = customer;
    return next();
}
const getBalance = (statement)=>{
const value = statement.reduce((acc, operation)=>{
    if (operation.type = "deposit") {
        return acc + operation.amount;
    }else{
        return acc - operation.amount;
    }
},0);
    return value;
}

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

app.get("/statement",verifyIfExistsAccountBi,(req, res)=>{
    const {bi} = req;
    const {customer} = req;
    return res.status(200).json(customer);
})

app.post("/deposit",verifyIfExistsAccountBi,(req, res)=>{
    const {customer}=req;
    const {description, amount} = req.body;
    const statementOperation={
        description,
        amount,
        created_at: new Date(),
        type: "deposit"
    }
    customer.statement.push(statementOperation);
    res.status(201).send();
    console.log(getBalance(customer.statement));
})

app.get("/withdraw", verifyIfExistsAccountBi, (req, res)=>{
    const customer = req;
    const {amount} = req.body;

})

app.listen(3333);