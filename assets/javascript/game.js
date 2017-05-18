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
//assigning the random number function to the two guess div
$('#toguess') .text("Number to Reach: "+randomnum);
$('#numwin') .text("Wins: "+wins);
$('#numloss').text("Losses: "+losses)
