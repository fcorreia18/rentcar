import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticaded";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

export const specificationRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
// specificationRoutes.get("/", (req, res) => {
//     res.json({ specifications: specificationRepository.list() });
// });
specificationRoutes.use(ensureAuthenticated);
specificationRoutes.post("/", createSpecificationController.handle);
