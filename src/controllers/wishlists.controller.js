import db from "../db.js";
import { v4 } from "uuid";
class WishListsController {
	async index(req, res, next) {
		try {
			const wishlists = await db("wishlists").select();
			console.log("index");
			return res.json(wishlists);
		} catch (error) {
			next(error);
		}
	}
	async indexById(req, res, next) {
		const { id } = req.params;
		try {
			const wishlists = await db("wishlists").select().where("id", id);
			console.log("index");
			if (wishlists == 0) {
				return res.json({ message: "error", motive: "wishlist not found" });
			} else {
				return res.json(wishlists);
			}
		} catch (error) {
			next(error);
		}
	}

	async create(req, res, next) {
		try {
			const id = v4();
			const { name, description, category } = req.body;

			// validation

			await db("wishlists").insert({
				id: id,
				name: name,
				description: description,
				category: category,
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
			const { name, description, ategory } = req.body;

			const wishlist = await db("wishlists").select().where("id", id);

			if (wishlist == 0) {
				return res.json({
					message: "wishlist not found",
				});
			} else {
				await db("wishlists")
					.where("id", id)
					.update({ name: name, description: description, category: ategory });
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

			const wishlist = await db("wishlists").select().where("id", id);

			if (wishlist == 0) {
				return res.json({
					message: "error",
					motive: ` wishlist id: ${id} does not exist`,
				});
			} else {
				await db("wishlists").delete().where("id", id);

				return res.json({ message: "deleted", id: `${id}` });
			}
		} catch (error) {
			next(error);
		}
	}
}
export { WishListsController };
