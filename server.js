const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let latest = { pressure: 0, temperature: 0, vibration: false, updatedAt: null };

app.get("/api/data", (req, res) => res.json(latest));

app.post("/api/data", (req, res) => {
  latest = {
    pressure: Number(req.body.pressure) || 0,
    temperature: Number(req.body.temperature) || 0,
    vibration: Boolean(req.body.vibration),
    updatedAt: new Date().toISOString()
  };
  res.json({ ok: true, data: latest });
});

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(PORT, () => console.log(`VeinGuard dashboard running on port ${PORT}`));