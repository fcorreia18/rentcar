import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import swaggerUI from "swagger-ui-express";

import "./database";
import "./shared/container";

import { AppError } from "./errors/AppError";
import { routes } from "./routes/routes";
import swaggerFile from "./swagger.json";

const app = express();
app.use(express.json());
app.use(routes);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal Server Error - ${error.message}`,
    });
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});

app.listen(8000, () => console.log("server running"));
