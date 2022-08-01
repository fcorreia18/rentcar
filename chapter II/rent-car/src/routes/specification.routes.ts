import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/UseCases/CreateSpecification";

export const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.get("/", (req, res) => {
    res.json({ specifications: specificationRepository.list() });
});
specificationRoutes.post("/", (req, res) => {
    createSpecificationController.handle(req, res);
});
