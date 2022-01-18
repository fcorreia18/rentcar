const express = require('express');
const {v4:uuid} = require('uuid');

const app = express();

app.use(express.json());

const users = [];

const checkIfExistsUserAccount = (req, res, next) =>{

    const {username} = req.headers;
    const filteredUser = users.find((user)=> user.username === username);
    if(filteredUser == undefined){
        return res.status(404).json({
            error:"User not found"
        });
    }
    req.user = filteredUser;
    return next();
}
const checkIfUsernameWasAlreadyUsed = (req, res, next) =>{

    const {username} = req.body;
    const [filteredUser] = users.map((user)=> user.username == username);
    if(filteredUser){
        return res.status(400).json({
            error:"username already exists"
        });
    }
    return next();
}
app.post("/user",checkIfUsernameWasAlreadyUsed,(req, res) =>{
    const {name, username}=req.body;
        users.push({
            id:uuid(),
            name,
            username,
            todos:[]
        })
       return res.status(201).send(users[users.length - 1]);  
});

app.get("/todos",checkIfExistsUserAccount,(req, res) =>{

    const {user} = req;
    return res.send(user.todos)
});
app.post("/todos",checkIfExistsUserAccount,(req, res) =>{
    const {title, deadline} = req.body;
    const {username} = req.headers;
    const insertTodos = {
        id:uuid(),
        title,
        done:false,
        deadline: new Date(deadline + " 00:00"),
        created_at:new Date()
    }

    const [user] = users.filter((user) => user.username == username);
    user.todos.push(insertTodos);

    return res.status(201).send(user.todos);
    
});

app.put("/todos/:id",checkIfExistsUserAccount,(req, res) =>{
    const {title, deadline} = req.body;
    const {id} = req.params;
    const {user} = req;
    const [filteredTodo] = user.todos.filter((todo)=> todo.id == id);
    if(filteredTodo !== undefined){

        filteredTodo.title = title;
        filteredTodo.deadline = deadline;
       return res.json({filteredTodo});
    }
    return res.status(400).json({error:"todo does not exist"})
});

app.patch("/todos/:id/done",checkIfExistsUserAccount,(req, res) =>{
    const {id} = req.params;
    const {user} = req;
    const [filteredTodo] = user.todos.filter((todo)=> todo.id == id);
    filteredTodo.done = true;
    console.log(filteredTodo)
   return res.json({filteredTodo});
});

app.delete("/todos/:id",checkIfExistsUserAccount,(req, res) =>{
    const {id} = req.params;
    const {user} = req;
    const [filteredTodo] = user.todos.filter((todo)=> todo.id == id);
    if(filteredTodo !== undefined){
        const indexOfTheItemToRemove = user.todos.indexOf(filteredTodo);
        user.todos.splice(indexOfTheItemToRemove,1);
        return res.json({user});
    }
    return res.status(400).json({error:"todo does not exist"})
});

app.listen(3333);
