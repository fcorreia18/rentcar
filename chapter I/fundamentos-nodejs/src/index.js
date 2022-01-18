const express = require('express');

const app = express();
app.use(express.json())

//ROUTE PARAMS: servem para identificar um recurso, no caso de editar, deletar ou buscar
//QUERY PARAMS: paginação/filtro
//BODY PARAMS:Os objectos inserção/alteração (JSON)
app.get("/courses",(req, res)=>{
    const query = req.query;
    console.log(query)
    return res.json(["curso 1","curso 2","curso 3","curso 4"])
});

app.post("/courses", (req, res)=>{
    const body = req.body;
    console.log(body)
    return res.json(["curso 1","curso 2","curso 3","curso 4"])
})

app.put("/courses/:id", (req, res)=>{
    return res.json(["curso 6","curso 2","curso 3","curso 4"])
})

app.patch("/courses/:id",(req, res)=>{
    return res.json(["curso 6","curso 7","curso 3","curso 4"])
})

app.delete("/courses/:id",(req, res)=>{
    return res.json(["curso 6","curso 3","curso 4"])
});

app.listen(3333);