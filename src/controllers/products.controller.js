import db from "../db.js";

class ProductsController {
	async index(req, res, next) {
		try {
			const products = await db("products").select();
			console.log("index");
			return res.json(products);
		} catch (error) {
			next(error);
		}
	}
	async create(req, res, next) {
		try {
			await db("products").insert({
				id: "teste2",
				name: "testenames",
				description: "testdescription",
			});
		} catch (error) {
			console.log(error);
		}
	}
}
export { ProductsController };
