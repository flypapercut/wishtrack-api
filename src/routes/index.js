import { Router } from "express";

import productRoutes from "./productRoutes.js";

const routes = Router();

routes.use(productRoutes);

//routes.get

export default routes;
