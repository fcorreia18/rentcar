import { Request, Response, Router } from "express";
import multer from "multer";

import { categoryController } from "../modules/cars/useCases/CreateCategory/index";
import { listCategoriesController } from "../modules/cars/useCases/ListCategories";

const categoryRoutes = Router();
const upload = multer({ dest: "./tmp" });
categoryRoutes.post("/", (req: Request, res: Response) =>
    categoryController.handle(req, res)
);
categoryRoutes.get(
    "/",
    (req: Request, res: Response): Response =>
        listCategoriesController.handle(req, res)
);
categoryRoutes.post("/import", upload.single("file"), (req, res) => {
    const { file } = req;
    console.log(file);

    res.status(200).send();
});
export { categoryRoutes };
