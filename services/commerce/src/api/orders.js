const express = require("express");

const router = express.Router();

const orders = [];

router.get("/", async (req, res) => {
  res.json({ orders });
});

router.post("/", async (req, res) => {
  const body = req.body || {};

  const order = {
    id: String(orders.length + 1),
    source: body.source || "storefront",
    items: body.items || [],
    createdAt: new Date().toISOString()
  };

  orders.push(order);

  res.json({
    orderCreated: true,
    order
  });
});

module.exports = router;
