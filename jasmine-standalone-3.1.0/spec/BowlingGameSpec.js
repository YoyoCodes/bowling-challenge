describe("BowlingGame", function() {
  var bowlingGame;

  it ('can score a Gutter Game', function(){
    bowlingGame = new BowlingGame();
    for(var i=0; i<21; i++){
      bowlingGame.roll(0);
    }
    expect(bowlingGame.score()).toEqual(0)
  });

  it('can score a game of incomplete frames', function(){
    bowlingGame = new BowlingGame();
    for(var i=0; i<20; i++){
      bowlingGame.roll(2);
    }
    expect(bowlingGame.score()).toEqual(40)
  });
});
