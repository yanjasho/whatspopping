var bars = require("../data/bars")

module.exports = function(app) {
    app.get("/api/bars", function(req, res) {
        res.json(bars)
    })

    app.post("/api/bars", function(req, res) {
        var totalDifference=[]
        for (var i=0; i<bars.length;i++){
            var differenceI=0
            for (var k=0; k<req.body.scores.length; k++){
                var difference = Math.abs(parseFloat(bars[i].scores[k])-parseFloat(req.body.scores[k]))
                differenceI=differenceI+difference
            }
            totalDifference.push(differenceI)
        }
        var id = totalDifference.indexOf(Math.min(...totalDifference))
        var match = bars[id] 
        res.json(match)
    })
}