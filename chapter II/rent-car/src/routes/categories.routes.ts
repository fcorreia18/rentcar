import { Request, Response, Router } from "express";
import { v4 as uuidV4 } from "uuid";

import Category from "../models/Category";

const categoryRoutes = Router();
const categories: Category[] = [];
categoryRoutes.post("/", (req: Request, res: Response): Response => {
    const { name, description } = req.body;
    const category = new Category();
    Object.assign(category, { name, description });
    categories.push(category);
    return res.status(201).json(categories);
});
export { categoryRoutes };
