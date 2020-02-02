require("dotenv").config();


const express = require("express");
const hbs = require("hbs");
const server = express();
const path = require("path")

// server initial config 

server.use(express.urlencoded({ extended:true}));
server.use(express.static("./public"));
server.set("views", "./views");
server.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

// routing


server.get("/", (req, res) => {
    const data = {
      css: ["base"]
    }
    res.render("base", data);
  });
  
server.get("/quoi", (req, res) => {
  const data = {
    css:  ["quoi"]
  }
  res.render("quoi", data);
});
  
server.get("/gentillesses", (req, res) => {
  const data = {
    css: ["gentillesses"]
  };
  res.render("gentillesses", data);
});

server.get("/bon", (req, res) => {
    const data = {
        css: ["bon"]
    };
    res.render("bon", data);
});


// server kickstart
server.listen(process.env.PORT, () => {
    console.log(`server ready @ http://localhost:${process.env.PORT}`)
})

