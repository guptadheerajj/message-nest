const db = require("../db/queries");

const appTitle = "Message Nest";

async function getIndexPage(req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { appTitle, messages: messages.rows });
}
module.exports = { getIndexPage };
