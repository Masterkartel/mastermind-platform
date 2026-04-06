const express = require("express");

const router = express.Router();

const products = [
  { id: "1", name: "Extension Cable", code: "MM-001", price: 850 },
  { id: "2", name: "LED Flood Light", code: "MM-002", price: 2500 },
  { id: "3", name: "Wall Socket", code: "MM-003", price: 350 },
  { id: "4", name: "Circuit Breaker", code: "MM-004", price: 1100 }
];

router.get("/", async (req, res) => {
  res.json({ products });
});

router.post("/", async (req, res) => {
  const body = req.body || {};

  const createdProduct = {
    id: String(products.length + 1),
    name: body.name || "Unnamed Product",
    code: body.code || `MM-00${products.length + 1}`,
    price: Number(body.price || 0)
  };

  products.push(createdProduct);

  res.json({
    created: true,
    product: createdProduct
  });
});

module.exports = router;
