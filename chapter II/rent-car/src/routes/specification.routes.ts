import { Router } from "express";

import SpecificationRepository from "../repositories/SpecificationRepository";
import CreateSpecificationService from "../services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();
specificationRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createSpecification = new CreateSpecificationService(
        specificationRepository
    );

    createSpecification.execute({ name, description });

    res.status(201).send();
});

specificationRoutes.get("/", (req, res) => {
    const all = specificationRepository.list();
    res.status(201).json(all);
});

export { specificationRoutes };
