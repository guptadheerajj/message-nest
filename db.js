const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
	{
		text: "My first project using Express and Nodejs",
		user: "Dheeraj",
		added: new Date(),
	},
];

async function getAllMessages() {
	return messages;
}

async function addMessage({ text, user }) {
	try {
		messages.push({ text, user, added: new Date() });
		return;
	} catch (error) {
		throw error;
	}
}

module.exports = { getAllMessages, addMessage };
