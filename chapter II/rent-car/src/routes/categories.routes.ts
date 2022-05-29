import { Request, Response, Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

const categoryRoutes = Router();
const categoriesRepository = new CategoriesRepository();
categoryRoutes.post("/", (req: Request, res: Response): Response => {
    const { name, description } = req.body;
    const category = categoriesRepository.findByName(name);
    if (category) {
        return res.status(400).json({ error: "Category Already Exists" });
    }
    categoriesRepository.create({ name, description });
    return res.status(201).send();
});
categoryRoutes.get("/", (req: Request, res: Response): Response => {
    const categories = categoriesRepository.list();
    return res.status(200).json(categories);
});
export { categoryRoutes };
