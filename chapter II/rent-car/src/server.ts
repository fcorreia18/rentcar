import express from "express";

import { categoryRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());
app.use(categoryRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});

app.listen(3333);
