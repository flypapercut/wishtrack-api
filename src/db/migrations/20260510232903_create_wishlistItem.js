export const up = function (knex) {
	return knex.schema.createTable("wishlistitem", (t) => {
		t.string("id").unique().notNullable();
		t.string("item_id").notNullable();
		t.string("wishlist_id").notNullable();
		t.string("status");
		t.string("description");
		t.string("category");
		t.string("acquisition_id");
	});
};

export const down = function (knex) {
	return knex.schema.dropTable("wishlistitem");
};
