const { addMessage } = require("../db");

function getForm(req, res) {
  res.render("form");
}

async function createMessage(req, res) {
  const { text, user } = req.body;
  await addMessage({ text, user });
  res.redirect("/");
}

module.exports = { createMessage, getForm };
