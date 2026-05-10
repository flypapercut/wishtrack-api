import { Router } from "express";
import db from "../db.js";

import { ProductsController } from "../controllers/products.controller.js";

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.get("/products", productsController.index);
productsRoutes.get("/products/:id", productsController.indexById);
productsRoutes.post("/products", productsController.create);
productsRoutes.put("/products/:id", productsController.update);
productsRoutes.delete("/products/:id", productsController.delete);

export default productsRoutes;
