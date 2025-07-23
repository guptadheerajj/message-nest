const express = require("express");
const path = require("path");

const app = express();

// configs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => res.render("index", { message: "Hello World" }));

const PORT = process.env.PORT | 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
