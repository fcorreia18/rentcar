import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoryRoutes } from "./category.routes";
import { specificationRoutes } from "./specification.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/categories", categoryRoutes);
routes.use("/specifications", specificationRoutes);
routes.use("/users", userRoutes);
routes.use(authenticateRoutes);

export { routes };
