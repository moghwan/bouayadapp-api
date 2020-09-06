module.exports = (req, res) => {
    res.json({
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
    })
}