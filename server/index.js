/**
 * This is a basic Express Server for local development 
 * in case you didn't install vercel package for node.
 */

// Express server
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Database
const db = require("../database")
const query = "SELECT * FROM `agenda` where `cr_day_number` like ? and `cr_month_number` like ? and `cr_year` like ?";

// Today's date
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'numeric', day: 'numeric' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(new Date()) 
const endpoints = {
  "endpoints": [
      {
          "id": 1,
          "name": "/api/agenda",
          "description": "Get today's date data"
      },
      {
          "id": 2,
          "name": "/api/agenda/:day-:month-:year",
          "description": "Get specific data for a given date"
      },
  ]
}

app.get('/', (req, res) => res.json(endpoints))
app.get('/api', (req, res) => res.json(endpoints))

app.listen(PORT, () => {
  console.log(`check => http://localhost:${PORT} for api endpoints`)
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