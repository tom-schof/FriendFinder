var friendsData = require("../data/friends.js");
var totalDifference = 0;
var smallestDifference = 500;
var friendIndex = 0;

module.exports = function (app) {

    app.get("./friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("./friends", function (req, res) {

        for (var i = 0; i < friendArray.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < userData.scores.length; j++) {
                totalDifference += Math.abs(friendArray[i].scores[j] - userData.scores[j]);
            }
            if (totalDifference < smallestDifference) {
                smallestDifference = totalDifference;
                friendIndex = i;
            }
        }

        res.json(friendArray[friendIndex]);

    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("./api/clear", function (req, res) {
        // Empty out the arrays of data
        friendsData.length = [];

        res.json({
            ok: true
        });
    });
};