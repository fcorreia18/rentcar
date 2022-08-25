import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/UseCases/CreateCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/UseCases/ImportCategory/ImportCategoryController";
import { ListCategoryController } from "../modules/cars/UseCases/ListCategory/ListCategoryController";

const upload = multer({
    dest: "./tmp",
});
const categoryRoutes = Router();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();
categoryRoutes.get("/", listCategoryController.handle);
categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.post(
    "/import",
    upload.single("file"),
    importCategoryController.handle
);

export { categoryRoutes };
