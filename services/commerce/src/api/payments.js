const express = require("express");

const router = express.Router();

router.post("/paystack/initialize", async (req, res) => {

  res.json({
    message: "paystack init placeholder"
  });

});

router.post("/paystack/webhook", async (req, res) => {

  res.json({
    received: true
  });

});

module.exports = router;
