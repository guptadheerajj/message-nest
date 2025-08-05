const { addMessage } = require("../db/queries");

function getForm(req, res) {
	res.render("form");
}

async function createMessage(req, res) {
	const { text, username } = req.body;
	await addMessage({ text, username });
	res.redirect("/");
}

module.exports = { createMessage, getForm };
