const { Router } = require("express");
const { getForm, createMessage } = require("../controllers/newController");

const newRouter = Router();

newRouter.get("/", getForm);
newRouter.post("/", createMessage);

module.exports = newRouter;
