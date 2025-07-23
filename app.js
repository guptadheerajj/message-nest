const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const db = require("./db");

const app = express();

// configs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

const appTitle = "Message Nest";

app.get("/", async (req, res) => {
	const messages = await db.getAllMessages();
	res.render("index", { appTitle, messages });
});
app.use("/new", newRouter);

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
