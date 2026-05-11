import { Router } from "express";

import productsRoutes from "./products.routes.js";
import wishListsRoutes from "./wishlists.routes.js";

const routes = Router();

routes.use(productsRoutes);
routes.use(wishListsRoutes);

//routes.get

export default routes;
