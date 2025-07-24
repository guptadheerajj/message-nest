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
	messages.push({
		id: messages.length + 1,
		text,
		user,
		added: format(new Date(), "do MMM"),
	});

	await fsPromise.writeFile(messagesFilePath, JSON.stringify(messages), "utf8");
}

async function getMessageById(id) {
	const result = await fsPromise.readFile(messagesFilePath, "utf8");
	const messages = JSON.parse(result);

	const messageById = messages.find((message) => message.id === id);

	return messageById;
}

module.exports = { getAllMessages, addMessage, getMessageById };
