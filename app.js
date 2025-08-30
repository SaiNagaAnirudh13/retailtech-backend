const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.json({ message: "Hello, Azure!" });
});

app.listen(port, () => {
  console.log(`Backend API running on port ${port}`);
});
