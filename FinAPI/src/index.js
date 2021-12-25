const express = require('express');
const app = express();

app.get("/",(req, res)=>{
    res.json({message:"alrigth"})
});

app.listen(3333);