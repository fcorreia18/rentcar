import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/UseCases/CreateSpecification/CreateSpecificationController";

export const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
// specificationRoutes.get("/", (req, res) => {
//     res.json({ specifications: specificationRepository.list() });
// });
specificationRoutes.post("/", createSpecificationController.handle);
