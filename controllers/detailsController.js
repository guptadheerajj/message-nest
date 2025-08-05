const db = require("../db/queries");

async function getMessageById(req, res) {
	const messageId = req.query.id;
	const message = await db.getMessageById(Number(messageId));

	res.render("details", { message: message.rows[0] });
}

module.exports = { getMessageById };
