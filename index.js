// vars
var port = process.env.PORT || 1337;
	
//  reqs
var	express = require("express"),
	bodyParser = require("body-parser"),
	jf = require('jsonfile'),
	util = require('util')

// configure app
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// logging all requests to console
app.use(function(req,res,next){
	console.log('serving '+req.method+' route '+req.url);
	next();
});
// routes
app.post('/save', function(req,res){
	var file = __dirname + '/games.json'
	console.log(req.body)
	var moves = req.body.moves
	 
	jf.writeFile(file, moves, function(err) {
	  console.log(err)
	  console.log('done writing to '+file)
	})
})

app.listen(port, function(){
	console.log('Listening on port ' + port);
});
