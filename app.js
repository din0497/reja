console.log("Web Serverni boshlash!");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("err here", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB connect

const db = require('./server').db()



// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("reja");
});


module.exports = app;