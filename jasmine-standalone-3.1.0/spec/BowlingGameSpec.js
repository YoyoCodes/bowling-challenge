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

  it('can score a spare', function(){
    bowlingGame.roll(8);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    multipleRolls(0,17);
    expect(bowlingGame.score()).toEqual(12)
  });

  it('can score a strike', function(){
    bowlingGame.roll(10);
    bowlingGame.roll(2);
    bowlingGame.roll(1);
    expect(bowlingGame.score()).toEqual(16);
  });

  function multipleRolls(pins, number){
    for(var i=0; i<number; i++){
      bowlingGame.roll(pins);
    }
  }

});
