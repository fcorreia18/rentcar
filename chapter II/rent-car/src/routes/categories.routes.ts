import { Request, Response, Router } from "express";

import CategoriesRepository from "../modules/cars/repositories/CategoriesRepository";
import CreateCategoryUseCase from "../modules/cars/useCases/CreateCategory/CreateCategoryUseCase";

const categoryRoutes = Router();
const categoriesRepository = new CategoriesRepository();
categoryRoutes.post("/", (req: Request, res: Response): Response => {
    const { name, description } = req.body;
    const createCategory = new CreateCategoryUseCase(categoriesRepository);
    const category = createCategory.execute({ name, description });
    return res.status(201).json(category);
});
categoryRoutes.get("/", (req: Request, res: Response): Response => {
    const categories = categoriesRepository.list();
    return res.status(200).json(categories);
});
export { categoryRoutes };
