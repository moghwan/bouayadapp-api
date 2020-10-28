# [bouayadapp-api](https://bouayadapp-api.herokuapp.com/)

This is a readonly api using a local sqlite database with prisma and express, deployed on heroku.


```json
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
```