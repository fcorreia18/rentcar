import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.send("first route");
});

app.listen(3333)