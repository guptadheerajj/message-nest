const fsPromise = require("fs/promises");
const path = require("path");
const { format } = require("date-fns");
const CustomError = require("./errors/CustomError");

const messagesFilePath = path.join(__dirname, "messages.json");

async function getAllMessages() {
  try {
    const result = await fsPromise.readFile(messagesFilePath, "utf8");
    const messages = JSON.parse(result);
    return messages;
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new CustomError("Messages file not found", 404);
    } else if (err instanceof SyntaxError) {
      throw new CustomError("Invalid JSON format in messages file", 500);
    } else {
      throw new CustomError(`Failed to read messages: ${err.message}`, 500);
    }
  }
}

async function addMessage({ text, user }) {
  const messages = await getAllMessages();
  messages.push({
    id: messages.length + 1,
    text,
    user,
    added: format(new Date(), "do MMM"),
  });

  try {
    await fsPromise.writeFile(
      messagesFilePath,
      JSON.stringify(messages),
      "utf8",
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new CustomError("Directory not found - cannot save messages", 500);
    } else if (error.code === "EACCES") {
      throw new CustomError(
        "Permission denied - cannot write to messages file",
        500,
      );
    } else {
      throw new CustomError(`Failed to save message: ${error.message}`, 500);
    }
  }
}

async function getMessageById(id) {
  try {
    const result = await fsPromise.readFile(messagesFilePath, "utf8");
    const messages = JSON.parse(result);
    const messageById = messages.find((message) => message.id === id);
    if (!messageById) {
      throw new CustomError(`Message with id ${id} was not found`, 404);
    }
    return messageById;
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new CustomError("Messages file not found", 404);
    } else if (error instanceof SyntaxError) {
      throw new CustomError("Invalid JSON format in messages file", 500);
    } else {
      throw new CustomError("Failed to get message", 500);
    }
  }
}

module.exports = { getAllMessages, addMessage, getMessageById };
