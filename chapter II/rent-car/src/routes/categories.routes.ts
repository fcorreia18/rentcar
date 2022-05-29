import { Request, Response, Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoryRoutes = Router();
const categories = [];
categoryRoutes.post("/", (req: Request, res: Response): Response => {
    const { name, description } = req.body;
    const category = { id: uuidV4(), name, description };
    categories.push(category);
    return res.status(201).json(categories);
});
export { categoryRoutes };
