var friendsData = require("../data/friends");


module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });



    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        var smallDiff = 5000;
        console.log(req.body);
        var bestMatch ;
        friendsData.forEach(function(friend) {
            for (var i = 0; i < friend.scores.length; i++) { 
                var totalDifference = 0;
                totalDifference += Math.abs(req.body.scores[i]-friend.scores[i]);
            }
            if (totalDifference < smallDiff){
                 bestMatch = friend;
                 smallDiff = totalDifference;
            }
            //console.log(friend);
        });
        console.log(bestMatch)
        res.json(bestMatch);
        friendsData.push(req.body);

    });
};