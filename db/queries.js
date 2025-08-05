const db = require("./pool");

async function getAllMessages() {
	const psqlText = `SELECT * FROM message_nest;`;

	return await db.query(psqlText);
}

async function addMessage({ text, username }) {
	const psqlText = `INSERT INTO message_nest (text, username, date) VALUES ($1, $2, NOW());`;
	const params = [text, username];

	await db.query(psqlText, params);
}

async function getMessageById(id) {
	const psqlText = `SELECT * FROM message_nest WHERE id=$1`;
	const params = [id];

	return await db.query(psqlText, params);
}

module.exports = {
	getAllMessages,
	addMessage,
	getMessageById,
};
