const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crisis_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

// Save alert
app.post("/alert", (req, res) => {
  const { type, latitude, longitude } = req.body;

  const sql = "INSERT INTO alerts (type, latitude, longitude) VALUES (?, ?, ?)";
  db.query(sql, [type, latitude, longitude], (err, result) => {
    if (err) throw err;
    res.send("Alert Saved");
  });
});

// Get alerts
app.get("/alerts", (req, res) => {
  db.query("SELECT * FROM alerts", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));