import { Request, Response, Router } from "express";

import {
    categoryController,
    categoryRepository,
} from "../modules/cars/useCases/CreateCategory/index";

const categoryRoutes = Router();
categoryRoutes.post("/", (req: Request, res: Response) => {
    categoryController.handle(req, res);
});
categoryRoutes.get("/", (req: Request, res: Response): Response => {
    const categories = categoryRepository.list();
    return res.status(200).json(categories);
});
export { categoryRoutes };
