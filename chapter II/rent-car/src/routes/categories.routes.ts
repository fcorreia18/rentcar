import { Request, Response, Router } from "express";

import {
    categoryController,
    categoryRepository,
} from "../modules/cars/useCases/CreateCategory/index";

const categoryRoutes = Router();
categoryRoutes.post("/", (req: Request, res: Response) =>
    categoryController.handle(req, res)
);
categoryRoutes.get("/", (req: Request, res: Response): Response => {});
export { categoryRoutes };
