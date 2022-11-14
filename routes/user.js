const bodyParser = require("body-parser");
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("user test is successfull");
});

router.post("/posttest", (req,res) => {
    const username = req.body.username;
    res.send(`Hello ${username}`)
})

module.exports = router;
