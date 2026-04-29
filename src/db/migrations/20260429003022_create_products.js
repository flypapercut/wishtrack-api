/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
	return knex.schema.createTable("products", (t) => {
		t.string("id").unique();
		t.string("name");
		t.string("description");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
	return knex.schema.dropTable("products");
};
