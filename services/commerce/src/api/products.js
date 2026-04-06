const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    products: []
  });
});

router.post("/", async (req, res) => {
  res.json({
    created: true
  });
});

module.exports = router;
