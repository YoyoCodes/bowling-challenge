function BowlingGame() {
  this.rolls =[];
  this.index_counter = 0;
  this.current_score = 0;
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var numberOfRolls = this.rolls.length
  for(var i = 0; i < numberOfRolls ;i++){
    this.current_score += this.rolls[i];
    if (this.isStrike(i)){
      this.current_score += this.rolls[this.index_counter + 1] + this.rolls[this.index_counter + 2];
    }
    if (this.isSpare()){
      this.current_score += this.rolls[this.index_counter + 2];
    };
    this.index_counter += 2;
  };
  return this.current_score
};

BowlingGame.prototype.isSpare = function () {
  return (this.rolls[this.index_counter] + this.rolls[this.index_counter + 1]) === 10
};

BowlingGame.prototype.isStrike = function (i) {
  return this.rolls[i] === 10
};
