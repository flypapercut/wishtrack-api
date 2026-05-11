import { Router } from "express";
import db from "../db.js";

import { WishListsController } from "../controllers/wishlists.controller.js";

const wishListsRoutes = Router();

const wishListsController = new WishListsController();

wishListsRoutes.get("/wishlists", wishListsController.index);
wishListsRoutes.get("/wishlists/:id", wishListsController.indexById);
wishListsRoutes.post("/wishlists", wishListsController.create);
wishListsRoutes.put("/wishlists/:id", wishListsController.update);
wishListsRoutes.delete("/wishlists/:id", wishListsController.delete);

export default wishListsRoutes;
