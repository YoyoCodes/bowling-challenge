describe("BowlingGame", function() {
  var bowlingGame;

  it('can create a game', function(){
    bowlingGame = new BowlingGame();
  });

  it('can roll', function(){
    bowlingGame = new BowlingGame();
    bowlingGame.roll(5);
  });
});
