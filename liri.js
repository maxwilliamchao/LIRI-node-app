var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var keyz = require('./keys');
var request = require('request');
var action = process.argv[2];

switch (action) {
  case "myTweets":
    myTweets();
    break;

  case "spotifyThisSong":
    spotifyThisSong();
    break;

  case "movieThis":
    movieThis();
    break;

  case "doWhatItSays":
    doWhatItSays();
    break;
};

function myTweets(){
  var client = new Twitter({
    consumer_key: keyz.twitterKeys.consumer_key,
    consumer_secret: keyz.twitterKeys.consumer_secret,
    access_token_key: keyz.twitterKeys.access_token_key,
    access_token_secret: keyz.twitterKeys.access_token_secret
  });
   
  var params = {screen_name: 'BearGrylls'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      for (var i=0; i<20; i++) {
        console.log('          ');
        console.log([i+1] + '. ' + tweets[i].text)};
        console.log('          ');
    }else{
      console.log(error);
    }
  });
};
// var queryString = process.argv[3];
function spotifyThisSong(){
  var spotify = new Spotify({
    id: keyz.spotifyKeys.clientId,
    secret: keyz.spotifyKeys.clientSecret
  });
     spotify.search({ type: 'track', query: process.argv[3]}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } 
    console.log("artist: " + data.tracks.items[0].artists[0].name);
    console.log("song's name: " + data.tracks.items[0].name); 
    console.log("preview link: " + data.tracks.items[0].external_urls.spotify);
    console.log("album name: " + data.tracks.items[0].album.name);  
  
  });
    console.log("artist: Ace of Base" );
    console.log("song's name: The Sign");  
    console.log("preview link: https://open.spotify.com/album/5UwIyIyFzkM7wKeGtRJPgB");   
    console.log("album name: The Sign"); 
  }
    
  
 
// };
// function movieThis(){
// var movieName = process.argv[3];//declare globally?
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece"
// };

// function doWhatItSays(){

// };

// function qwerty(){
//   twitterkeys.prompt([
// {
//   //yourcodehere
// }
//     ]).then(function(asdf){
//       //morehere
//     })
// };
// qwerty();