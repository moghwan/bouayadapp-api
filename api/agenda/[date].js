const db = require("../../database")
const query = "SELECT * FROM `agenda` where `cr_day_number` like ? and `cr_month_number` like ? and `cr_year` like ?";

module.exports = (req, res) => {
    let date = req.query.date.split('-');
    
    let params = [
        date[0],
        date[1],
        date[2]
    ]

    db.get(query, params, (err, row) => {
        if (err) {
            res.status(400).json({
                "error": err.message
            });
            return;
        }
        if (!row) {
            res.status(404).json({
                "error": "no record"
            });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });

}