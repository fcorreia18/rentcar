import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "../modules/cars/UseCases/CreateSpecification/CreateSpecificationController";

export const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();
const createSpecificationController = new CreateSpecificationController();
specificationRoutes.get("/", (req, res) => {
    res.json({ specifications: specificationRepository.list() });
});
specificationRoutes.post("/", createSpecificationController.handle);
