import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/UseCases/CreateCategory";
import importCategoryController from "../modules/cars/UseCases/ImportCategory";
import listCategoryController from "../modules/cars/UseCases/ListCategory";

const upload = multer({
    dest: "./tmp",
});
const categoryRoutes = Router();
categoryRoutes.get("/", (req, res) =>
    listCategoryController().handle(req, res)
);
categoryRoutes.post("/", (req, res) =>
    createCategoryController().handle(req, res)
);
categoryRoutes.post("/import", upload.single("file"), (req, res) =>
    importCategoryController().handle(req, res)
);

export { categoryRoutes };
