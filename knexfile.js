// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
	development: {
		client: "sqlite3",
		connection: {
			filename: process.env.DB_DIRECTORY,
		},
		migrations: {
			directory: "./src/db/migrations",
		},
		useNullAsDefault: true,
	},
};
