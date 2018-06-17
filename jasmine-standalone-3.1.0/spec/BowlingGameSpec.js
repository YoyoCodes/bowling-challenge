describe("BowlingGame", function() {
  var bowlingGame;

  it ('can roll a Gutter Game', function(){
    bowlingGame = new BowlingGame();
    for(var i=0; i<21; i++){
      bowlingGame.roll(0);
    }
    expect(bowlingGame.score()).toEqual(0)
  });
});
