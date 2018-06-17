$(document).ready(function(){

  var bowlingGame = new BowlingGame;
    $("#3").click(function(){
      bowlingGame.roll(3);
      $("#current-score").text('Current score: 3')
    });
});
