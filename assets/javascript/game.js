//defining varibles
var randomnum=Math.floor(Math.random()*101+19)
var yourscore=0
var wins=0
var losses=0
var gemone=Math.floor(Math.random()*11+1)
var gemtwo=Math.floor(Math.random()*11+1)
var gemthree=Math.floor(Math.random()*11+1)
var gemfour=Math.floor(Math.random()*11+1)
//console.log(gemfour)
//assigning values from varibles to correct spots
$('#toguess') .text("Number to Reach: "+randomnum);
$('#numwin') .text("Wins: "+wins);
$('#numloss').text("Losses: "+losses)
$('#yourscore').text("Your total score is: "+yourscore)

//add wins and losses

function winner(){
	alert("YOU WIN!!!");
	wins++;
	$('#numwin').text(wins);
	reset();
}

function loser(){
	alert("you lose :(");
	losses++;
	$('#numloss').text(losses);
	reset();
}

//setup jewel on click

$('#one').on('click',function(){
	yourscore=yourscore+gemone;
	console.log("New yourscore="+yourscore);
	$('#yourscore').text(yourscore);
		if (yourscore==randomnum){
			winner();
		}
		else if (yourscore>randomnum){
			loser();
		}
})

$('#two').on('click',function(){
	yourscore=yourscore+gemtwo;
	console.log("New yourscore="+yourscore);
	$('#yourscore').text(yourscore);
		if (yourscore==randomnum){
			winner();
		}
		else if (yourscore>randomnum){
			loser();
		}
})

$('#three').on('click',function(){
	yourscore=yourscore+gemthree;
	console.log("New yourscore="+yourscore);
	$('#yourscore').text(yourscore);
		if (yourscore==randomnum){
			winner();
		}
		else if (yourscore>randomnum){
			loser();
		}
})

$('#four').on('click',function(){
	yourscore=yourscore+gemfour;
	console.log("New yourscore="+yourscore);
	$('#yourscore').text(yourscore);
		if (yourscore==randomnum){
			winner();
		}
		else if (yourscore>randomnum){
			loser();
		}
})