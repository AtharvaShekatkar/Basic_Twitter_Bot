console.log("Running the Twitter bot\n")

var Twit = require('twit');

require('dotenv').config();

var T = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

var params = [
    {q: '#batman', count: 2},
    {q: '#ironman', count: 3}, 
    {q: '#machinelearning', count: 5}
];

function gotData(err, data, response){
    var tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++){    
        console.log("User: " + tweets[i].user.name)
        console.log("Tweet: " + tweets[i].text)
        console.log("Done\n")
    }
}

for(var j = 0; j < params.length; j++){
    T.get('search/tweets', params[j], gotData);
}