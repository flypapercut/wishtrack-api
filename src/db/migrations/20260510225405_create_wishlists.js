/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
	return knex.schema.createTable("wishlists", (t) => {
		t.string("id").unique().notNullable();
		t.string("name").notNullable();
		t.string("description");
		t.string("category");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
	return knex.schema.dropTable("wishlists");
};
