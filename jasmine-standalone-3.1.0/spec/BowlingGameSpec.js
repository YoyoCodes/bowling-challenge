describe("BowlingGame", function() {
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  it ('can score a Gutter Game', function(){
    multipleRolls(0, 20);
    expect(bowlingGame.score()).toEqual(0)
  });

  it('can score a game of incomplete frames', function(){
    multipleRolls(2, 20);
    expect(bowlingGame.score()).toEqual(40)
  });

  function multipleRolls(pins, number){
    for(var i=0; i<number; i++){
      bowlingGame.roll(pins);
    }
  }
});
