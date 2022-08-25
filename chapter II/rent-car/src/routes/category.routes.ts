import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/UseCases/CreateCategory/CreateCategoryController";
import importCategoryController from "../modules/cars/UseCases/ImportCategory";
import listCategoryController from "../modules/cars/UseCases/ListCategory";

const upload = multer({
    dest: "./tmp",
});
const categoryRoutes = Router();
const createCategoryController = new CreateCategoryController();
categoryRoutes.get("/", (req, res) =>
    listCategoryController().handle(req, res)
);
categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.post("/import", upload.single("file"), (req, res) =>
    importCategoryController().handle(req, res)
);

export { categoryRoutes };
