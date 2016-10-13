
var fs = require('fs');

var inquirer = require("inquirer");

var tweet = require("./keys.js");

var action;

var value;


// console.log("oyeee");
	 inquirer.prompt([

	 {
	 	type:"input",
	 	message:"Hello, welcome to L.I.R.I Language Interaction Responsive Interface. Whats your name?",
	 	name:"input"
	 },

	 {
	 	type:"list",
	 	message: "How can i help you?",
	 	choices: ["lastest-tweet","spotify-this-song","movie-this","do-what-it-says" ],
	 	name:"choice"
	 },
	 {
	 	type:"input",
	 	message:"What would you like to look up",
	 	name:"lol"
	 }

	 	]).then(function (user) {
	 		console.log("Hello",user.input)
	 		console.log("Here are your results for:")
	 		console.log(user.choice,user.lol)
	 		// console.log(user.list)

	 		action = user.choice;

	 		value = user.lol;

switch(action){
    case 'lastest-tweet':
        tweets();
    break;

    case 'spotify-this-song':
        getSpotify(value);
    break;

    case 'movie-this':
        movie(value);
    break;

    case 'do-what-it-says':
        say();
    break;
}


	 		
	 	})


function movie(a){

// console.log("Movie is working!!!!");

var request= require('request');

var queryUrl = 'http://www.omdbapi.com/?t=' + a +'&y=&plot=short&r=json';
request(queryUrl,function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log("================================================")
		console.log(JSON.parse(body)["Title"]);
		console.log("The movie's Plot is: " + JSON.parse(body)["Plot"])
		console.log("The movie's Release Date is: " + JSON.parse(body)["Released"])
		console.log("The Movie's IMDB Rating is: " + JSON.parse(body)["imdbRating"])
		console.log("The Movie's Country of Origin is: " + JSON.parse(body)["Country"])
		console.log("The Movie's Language is: " + JSON.parse(body)["Language"])
		console.log("The Movie's Plot is: " + JSON.parse(body)["Plot"])
		console.log("The Movie's Actors are: " + JSON.parse(body)["Actors"])
		console.log("The Movie's Rate: " + JSON.parse(body)["Rated"])
	}
});

};

 function getSpotify(b){
 var spotify = require('spotify');
 spotify.search({ type: 'track', query: b }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
  	for(var i = 0; i < data.tracks.items.length; i++){
  	
  		for(var j= 0; j < data.tracks.items[i].artists.length; j++){
  	
  	console.log("----------------------------------------------");
  	
  	console.log("Artist: " + data.tracks.items[i].artists[j].name);
   
  	console.log("Album: " + data.tracks.items[i].album.name);
  
  	console.log("Song's Name: " + data.tracks.items[i].name);

  	console.log("-----------------------------------------------");
}

}
});
 };
 	function say(){
 	var fs= require('fs');

	fs.readFile('random.txt','utf8', function(err, data){
		var array= data.split(',');
	if ("spotify-this-song"== array[0]){
		getSpotify(array[1]);

}
	else if('movie-this'== array[0]){
		movie(array[1]);
	}
		
})
 	}
