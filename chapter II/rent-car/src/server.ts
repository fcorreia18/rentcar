import "reflect-metadata";
import "./database";

import express from "express";
import swaggerUI from "swagger-ui-express";

import { routes } from "./routes/routes";
import swaggerFile from "./swagger.json";

const app = express();
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});

app.listen(8000, () => console.log("server rodando"));
