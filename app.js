const express = require("express");
const { generateMeta, generateImage } = require("./controller");

// Setup
const app = express();
app.listen(4000, () => console.log("listening to requests on port 4000"));

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
app.post("/openai/meta", generateMeta);
app.post("/openai/image", generateImage);
