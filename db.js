const fsPromise = require("fs/promises");
const path = require("path");
const { format } = require("date-fns");

const messagesFilePath = path.join(__dirname, "messages.json");

async function getAllMessages() {
	// implement error handling later
	const result = await fsPromise.readFile(messagesFilePath, "utf8");
	const messages = JSON.parse(result);
	return messages;
}

async function addMessage({ text, user }) {
	// implement error handling later
	const messages = await getAllMessages();
	messages.push({ text, user, added: format(new Date(), "do MMM") });

	await fsPromise.writeFile(messagesFilePath, JSON.stringify(messages), "utf8");
}

module.exports = { getAllMessages, addMessage };
