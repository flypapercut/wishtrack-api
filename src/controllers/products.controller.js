import db from "../db.js";
import { v4 } from "uuid";
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
	async indexById(req, res, next) {
		const { id } = req.params;
		try {
			const products = await db("products").select().where("id", id);
			console.log("index");
			if (products == 0) {
				return res.json({ message: "error" });
			} else {
				return res.json(products);
			}
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			const id = v4();
			const { name, description } = req.body;

			// validation

			await db("products").insert({
				id: id,
				name: name,
				description: description,
			});
			console.log("insert");
			return res.status(201).json({ message: "created" });
		} catch (error) {
			next(error);
		}
	}
	async update(req, res, next) {
		try {
			const { id } = req.params;
			console.log(id);
			const { name, description, brand } = req.body;

			const product = await db("products").select().where("id", id);

			console.log(product);

			if (product == 0) {
				return res.json({
					message: "product not found",
				});
			} else {
				await db("products")
					.where("id", id)
					.update({ name: name, description: description, brand: brand });
				return res.status(200).json({
					message: "updated",
					id: id,
				});
			}
		} catch (error) {
			next(error);
		}
	}
	async delete(req, res, next) {
		try {
			const { id } = req.params;

			const product = await db("products").select().where("id", id);

			if (product == 0) {
				return res.json({
					message: "error",
					motive: ` product id: ${id} does not exist`,
				});
			} else {
				await db("products").delete().where("id", id);

				return res.json({ message: "deleted", id: `${id}` });
			}
		} catch (error) {
			next(error);
		}
	}
}
export { ProductsController };
