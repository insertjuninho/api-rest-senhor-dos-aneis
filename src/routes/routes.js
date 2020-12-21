const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    //res.send("<h1> Home </h1>")
    res.render("view")
  });

router.get("/register", (req, res) => {
    //res.send("<h1> Home </h1>")
    res.render("register")
  });
  
// router.get("/login", (req, res) => {
//     //res.send("<h1> Home </h1>")
//     res.render("login")
//   });
  
// router.get("/votar", (req, res) => {
//     //res.send("<h1> Home </h1>")
//     res.render("votar")
// });

module.exports = router;