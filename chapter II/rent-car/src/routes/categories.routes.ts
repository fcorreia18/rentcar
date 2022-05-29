import { Request, Response, Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

const categoryRoutes = Router();
const categoriesRepository = new CategoriesRepository();
categoryRoutes.post("/", (req: Request, res: Response): Response => {
    const { name, description } = req.body;
    categoriesRepository.create({ name, description });
    return res.status(201).send();
});

export { categoryRoutes };
