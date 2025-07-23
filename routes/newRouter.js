const { Router } = require("express");
const newRouter = Router();
const { addMessage } = require("../db");

newRouter.get("/", (req, res) => res.render("form"));
newRouter.post("/", async (req, res) => {
	const { text, user } = req.body;
	await addMessage({ text, user });
	res.redirect("/");
});

module.exports = newRouter;
