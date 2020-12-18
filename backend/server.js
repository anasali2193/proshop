import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
// const bodyParser = require("body-parser");

// const mongoose = require("mongoose");

// const cors = require("cors");

// const postRouter = require("./routes/posts");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api running ");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port : ${PORT}`)
);