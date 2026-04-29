import { Router } from "express";
import db from "../db.js";

const productRoutes = Router();

productRoutes.get("/products", async () => {
	try {
		const products = await db("products").select();
		console.log(products);
	} catch (error) {
		console.log(error);
	}
});

productRoutes.post("/products", async () => {
	try {
		await db("products").insert({
			id: "teste2",
			name: "testenames",
			description: "testdescription",
		});
	} catch (error) {
		console.log(error);
	}
});

export default productRoutes;
