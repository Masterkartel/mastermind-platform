require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Mastermind Commerce API",
    status: "running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    ok: true
  });
});

app.use("/api/products", require("./api/products"));
app.use("/api/orders", require("./api/orders"));
app.use("/api/payments", require("./api/payments"));

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Commerce API running on port ${port}`);
});
