var Twitter = require('twitter');
var  dotenv =require('dotenv').config();
var Promise = require('promise');


var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});


module.exports = function (twitterHandle){

return new Promise(function (resolve, reject) {
	 
		client.get('statuses/user_timeline', {count: 5, screen_name: twitterHandle}, function(err, tweets, resp){

			if(err) {
				console.log("ERROR in get-tweets function");
				reject(err);
				
			}
			else {
				// console.log(tweets, "here")

				resolve(tweets)

			}
				

		
			
		});




	});






}




