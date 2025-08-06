const { Router } = require("express");
const {
	getForm,
	createMessage,
	validateMessage,
} = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", getForm);
newRouter.post("/", validateMessage, createMessage);

module.exports = newRouter;
