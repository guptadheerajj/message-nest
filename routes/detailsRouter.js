const { Router } = require("express");
const { getMessageById } = require("../controllers/detailsController");

const detailsRouter = Router();

detailsRouter.get("/", getMessageById);

module.exports = detailsRouter;
