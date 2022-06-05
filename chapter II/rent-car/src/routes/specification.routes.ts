import { Router } from "express";

import { specificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationsController } from "../modules/cars/useCases/ListSpecifications";

const specificationRoutes = Router();
specificationRoutes.post("/", (req, res) => {
    specificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
    listSpecificationsController.handle(req, res);
});

export { specificationRoutes };
