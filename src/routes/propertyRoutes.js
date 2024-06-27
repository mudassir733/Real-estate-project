import express from "express";

const route = express.Router();

route.get("/properties", (req, res) => {
  res.send("Hello Properties!");
});

export default route;
