import express from "express";

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});

app.listen(3333);
