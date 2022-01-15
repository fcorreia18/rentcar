const express = require('express');
const {v4:uuid} = require('uuid');

const app = express();

app.use(express.json());

const users = [];

const checkIfExistsUserAccount = (req, res, next) =>{

    const {username} = req.headers;
    const filteredUser = users.find((user)=> user.username === username);
    if(filteredUser.length == 0 || filteredUser == undefined){
        return res.status(404).json({
            error:"User not found"
        });
    }
    req.username = username;
    return next();
}

app.post("/user",checkIfExistsUserAccount,(req, res) =>{
    const {name, username}=req.body;

     users.push({
        id:uuid(),
        name,
        username,
        todos:[]
    })

    res.status(201).send(users[users.length - 1]);
});

app.get("/todos",(req, res) =>{

    const {username} = req.headers;

    return res.send(username.todos)
});
app.post("/todos",checkIfExistsUserAccount,(req, res) =>{
    const {title, deadline} = req.body;
    const {username} = req.headers;
    const insertTodos = {
        id:uuid(),
        title,
        done:false,
        deadline: new Date(deadline),
        created_at:new Date()
    }

    users.todos.push(insertTodos);

    return res.status(201).send();
    
});

app.put("/todos/:id",checkIfExistsUserAccount,(req, res) =>{

});

app.listen(3333);
