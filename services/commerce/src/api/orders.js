const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    orders: []
  });
});

router.post("/", async (req, res) => {
  res.json({
    orderCreated: true
  });
});

module.exports = router;
