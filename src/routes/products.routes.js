import { Router } from "express";
import db from "../db.js";

import { ProductsController } from "../controllers/products.controller.js";

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.get("/products", productsController.index);
productsRoutes.post("/products", productsController.create);

export default productsRoutes;
