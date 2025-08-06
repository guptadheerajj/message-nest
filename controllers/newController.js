const { body, matchedData, validationResult } = require("express-validator");
const { addMessage } = require("../db/queries");

function getForm(req, res) {
	res.render("form");
}

const validateMessage = [
	body("text")
		.trim()
		.notEmpty()
		.withMessage("Please enter a message")
		.bail()
		.isLength({ min: 2, max: 70 })
		.withMessage("Message must include characters between 2 adn 70"),
	body("username")
		.trim()
		.notEmpty()
		.withMessage("Please enter a message")
		.bail()
		.isLength({ min: 3, max: 20 })
		.withMessage("Username must include characters between 3 adn 20"),
];

async function createMessage(req, res) {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		console.log(error.array());
		res.status(400).render("form.ejs");
		return;
	}

	const { text, username } = matchedData(req, { locations: ["body"] });
	await addMessage({ text, username });
	res.redirect("/");
}

module.exports = { validateMessage, createMessage, getForm };
