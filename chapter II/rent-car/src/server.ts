import express from "express";

import { categoryRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specification.routes";

const app = express();
app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/specifications", specificationRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});

app.listen(3333);
