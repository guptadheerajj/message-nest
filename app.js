const express = require("express");
const path = require("path");
require("dotenv").config({ debug: process.env.DEBUG });

// Routers
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");

const app = express();

// configs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);
app.use("/new", newRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
