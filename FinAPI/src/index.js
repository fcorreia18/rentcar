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
    if (operation.type === "credit") {
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
        type: "credit"
    }
    customer.statement.push(statementOperation);
    res.status(201).send();
    console.log(getBalance(customer.statement));
})

app.post("/withdraw", verifyIfExistsAccountBi, (req, res)=>{
    const {customer} = req;
    const {amount} = req.body;
    const balance = getBalance(customer.statement);

    if (balance < amount) {
        return res.status(400).json({error:"unsuficient funds!!!"})
    }

    const statementOperation = {
        amount,
        created_at:new Date(),
        type:"debit"
    }
    customer.statement.push(statementOperation);
    res.status(201).send();
})

app.get("/statement/:date",verifyIfExistsAccountBi, (req, res)=>{
    const {customer} = req;
    const {date} = req.params;

    const dateFormat = new Date(date + " 00:00");
    const statement = customer.statement.filter((data)=> data.created_at.toDateString() === dateFormat.toDateString() )
    return res.status(200).send(statement);
})

app.listen(3333);