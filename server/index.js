/**
 * This is a basic Express Server for local development 
 * in case you didn't install vercel package for node.
 */

// Express server
const express = require('express')
const app = express()
const port = 3000

// Database
const db = require("../database")
const query = "SELECT * FROM `agenda` where `cr_day_number` like ? and `cr_month_number` like ? and `cr_year` like ?";

// Today's date
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'numeric', day: 'numeric' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(new Date()) 

app.get('/', (req, res) => {
  res.send('Test allah')
})

app.listen(port, () => {
  console.log(`check => http://localhost:${port}/api/agenda`)
})

app.get("/api/agenda/:day-:month-:year", (req, res, next) => {
  let params = [
    req.params.day,
    req.params.month,
    req.params.year
  ]
  db.get(query, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":row
      })
    });
});


app.get("/api/agenda", (req, res, next) => {
  let params = [
    day,
    month,
    year
  ]
  db.get(query, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":row
      })
    });
});