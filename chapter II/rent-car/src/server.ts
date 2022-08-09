import express from "express";
import swaggerUI from "swagger-ui-express";

import swaggerFile from "../swagger.json";
import { routes } from "./routes/routes";

const app = express();
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});

app.listen(3333, () => console.log("server rodando"));
