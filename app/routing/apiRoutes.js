// File to handle the friend matching logic
var path = require("path");
var friends = require("../data/friends.js");

// Display friends on /api/friends route

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Post request to manipulate user's data and send back a new friend match

    app.post("/api/friends", function(req, res) {

        var surveyResults = req.body;

        surveyResults.name = surveyResults.name.replace(/\s+/g, "");

        surveyResults.photo = surveyResults.photo.replace(/\s+/g, "");

        // function defined below - converts strings to integers
        convertStringToInt(surveyResults.scores);

        // variables to store matched friend data
        var newUserScores = surveyResults.scores;
        var matchName = '';
        var matchImage = '';
        // Starter number in order to make logic below work
        var totalDifference = 10000;

        // Iterate through the friends array
        for (var i = 0; i < friends.length; i++) {
            // Initialize difference b/t scores for a particular friend
            var diff = 0;
            // Iterate through each survey score of a friend
            for (var j = 0; j < friends[i].scores.length; j++) {
                // Difference = absolute value of potential new friend scores minus scores inputted by new user
                diff += Math.abs(friends[i].scores[j] - newUserScores[j]);
            }
            // If this difference is less than the global score difference...
            if (diff < totalDifference) {
                // This is the new best friend for now...
                totalDifference = diff;
                // Set name and photo to this friend's property values
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        // Add user's inputs into the friends array
        friends.push(surveyResults);

        // Respond with json of name and photo of the matched friend
        res.json({
            status: 'OK',
            matchName: matchName,
            matchImage: matchImage
        });


    });

}


function convertStringToInt(surveyResults) {
    for (var i = 0; i < surveyResults.length; i++) {
        surveyResults[i] = parseInt(surveyResults[i]);
    }
}

