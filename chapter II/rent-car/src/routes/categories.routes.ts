import { Request, Response, Router } from "express";

import { categoryController } from "../modules/cars/useCases/CreateCategory/index";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";

const categoryRoutes = Router();
categoryRoutes.post("/", (req: Request, res: Response) =>
    categoryController.handle(req, res)
);
categoryRoutes.get(
    "/",
    (req: Request, res: Response): Response =>
        listCategoriesController.handle(req, res)
);
export { categoryRoutes };
