const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// setting up the PORT for heroku or, local use
const port = process.env.PORT || 3001


// set up the path to the public directory
public_dir = path.join(__dirname, "../public");
//only for static files
app.use(express.static(public_dir));

//Setting Up Handlebars engine
//set up path to customize views directory path
const viewsPath = path.join(__dirname, "../templates/views");
//set up path for partials directory
const partialsPath = path.join(__dirname, "../templates/partials");
//set up views folder
app.set("views", viewsPath);
//setting up handlebars
app.set("view engine", "hbs");
//set up partials
hbs.registerPartials(partialsPath);

//first parameter the <partial url>, second a function
// app.com

app.get("", (req, res) => {
  res.render("index", {
    title: "Faraz Task APP",
    name: "Faraz"
  });
});

// /help
app.get("/help", (req, res) => {
  message = "This is a message from Faraz";
  title = "Help";
  res.render("help", {
    message,
    title,
    name: "Faraz"
  });
});

// /about
app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    name: "Faraz",
    number: "647123"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Faraz",
    message: "Help Page not Found"
  });
});


app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Faraz",
    message: "Page not Found"
  });
});

// run server
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});