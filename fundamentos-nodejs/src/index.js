const express = require('express');

const app = express();
app.get("/",(req, res)=>{
    return res.send("Requisição feita com sucesso")
});
app.listen(3333);