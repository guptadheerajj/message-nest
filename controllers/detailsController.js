const db = require("../db");

async function getMessageById(req, res) {
  const messageId = req.query.id;
  const message = await db.getMessageById(Number(messageId));

  res.render("details", { message });
}

module.exports = { getMessageById };
