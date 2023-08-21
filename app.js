const express = require("express");
const { generateMeta, generateImage } = require("./controller");

// Setup
const app = express();
app.listen(5000, () => console.log("Listening to requests on port 5000"));

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
app.post("/openai/meta", generateMeta);
app.post("/openai/image", generateImage);
