const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    game: "Stumble Bring",
    status: "online",
    version: "0.50"
  });
});

app.get("/status", (req, res) => {
  res.json({ online: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Stumble Bring server online");
});
