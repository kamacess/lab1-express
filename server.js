require("dotenv").config();


const express = require("express");
const hbs = require("hbs");
const server = express();

// server initial config 

server.use(express.urlencoded({ extended:true}));
server.use(express.static("./public"));
server.set("views", "./views");
server.set("view engine", "hbs");
hbs.registerPartials("./views/partials");

// routing

server.get("/", (req, res) => {
    res.render("home");
});

// the artists router contains 3 routes : 
server.use(require("./routes/artists"));

// server kickstart
server.listen(process.env.PORT, () => {
    console.log(`erver ready @ http://localhost:${process.env.PORT}`)
})

