const db = require("../db");

const appTitle = "Message Nest";

async function getIndexPage(req, res) {
	const messages = await db.getAllMessages();
	res.render("index", { appTitle, messages });
}
module.exports = { getIndexPage };
