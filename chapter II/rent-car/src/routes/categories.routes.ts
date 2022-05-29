import { Request, Response, Router } from "express";

const categoryRoutes = Router();
const categories = [];
categoryRoutes.post("/", (req: Request, res: Response): Response => {
    const { name, description } = req.body;
    categories.push({ name, description });
    return res.status(201);
});
export { categoryRoutes };
