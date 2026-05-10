/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
	return knex.schema.createTable("products", (t) => {
		t.string("id").unique().notNullable();
		t.string("name").notNullable();
		t.string("description");
		t.string("brand");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
	return knex.schema.dropTable("products");
};
