const express = require("express");

const authRoutes = require("./routes/v1/authRoutes");
const productRoutes = require("./routes/v1/productRoutes");
const orderRoutes = require("./routes/v1/orderRoutes");

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);

module.exports = app;
