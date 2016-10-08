var fs= require('fs');
var tweet= require("./keys.js")
var action = process.argv[2];
var value=process.argv[3];

switch(action){
    case 'my-tweets':
        tweets();
    break;

    case 'spotify-this-song':
        spotify(value);
    break;

    case 'movie-this':
        movie(value);
    break;

    case 'do-what-it-says':
        say(value);
    break;
}


// function tweets(){

//  fs.readFile('append.txt', "utf8", function(err, data){
function movie(a){

var request= require('request');

var queryUrl = 'http://www.omdbapi.com/?t=' + a +'&y=&plot=short&r=json';
request(queryUrl,function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(JSON.parse(body)["Title"]);
		console.log("The movie's plot is: " + JSON.parse(body)["Plot"])
		console.log("The movie's release date is: " + JSON.parse(body)["Released"])
		console.log("The movie's IMDB rating is: " + JSON.parse(body)["imdbRating"])
		console.log("The movie's country of origin is: " + JSON.parse(body)["Country"])
		console.log("The movie's language is: " + JSON.parse(body)["Language"])
		console.log("The movie's plot is: " + JSON.parse(body)["Plot"])
		console.log("The movie's Actors are: " + JSON.parse(body)["Actors"])
		console.log("The movie's rate: " + JSON.parse(body)["Rated"])
	}
});

}