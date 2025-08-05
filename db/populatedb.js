const { Client } = require("pg");
const { argv } = require("process");
require("dotenv").config({ debug: process.env.DEBUG });

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

// to make database url dynamic, I am using process.argv
// the .env configurations for database is a fallback
const connectionString =
	argv[2] || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

const createTable = `
	CREATE TABLE IF NOT EXISTS message_nest (
		id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		text VARCHAR ( 255 ) NOT NULL,
		username VARCHAR ( 255 ) NOT NULL,
		date TIMESTAMPTZ NOT NULL
	);`;

async function main() {
	console.log("Connection db...");

	const client = new Client({ connectionString });

	try {
		await client.connect();
		await client.query(createTable);
		await client.end();
	} catch (err) {
		console.error("Database error: ", {
			message: err.message,
			code: err.code,
			query: createTable,
			stack: err.stack,
		});
	}

	console.log("End...");
}

main();
