// hanabi.js
// input each move
// move types: 
	// play
	// 	number, color
	// clue
	// bomb
	// discard
// push to array of moves, write JSON to a file

var moves = [];

function play(){
	var color = $(".colorpicker > .active").val()
	var number = $(".numberpicker > .active").val()
	moves.push({
		type:"play",
		color: color,
		number: number
	})
	$('.active').removeClass('active');
}
function saveGame(){
	console.log(moves.length)
	$.ajax({
	   type: "POST",
	   url: "/save",
	   dataType: "json",
	   success: function(data){
	   		console.log(data)
	   },
	   data: {moves: moves}
	});
}

$(document).on('ready', function(){
	console.log('ready');
	$('.colorpicker > li').click(function () {
	    $(this).toggleClass('active').siblings().removeClass('active');
	});
	$('.numberpicker > li').click(function () {
	    $(this).toggleClass('active').siblings().removeClass('active');
	});

	$(".buttons > a").click(function(){
		console.log($(this).text())
		var type = $(this).text().toLowerCase();
		if(type === "play"){
			play();
		} else {
			moves.push({type:type})
		}
		console.log(moves)
	});

	$("#save").click(function(){
		saveGame();
	})

})