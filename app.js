// app.js
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello, Azure!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
