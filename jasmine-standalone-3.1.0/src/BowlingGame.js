function BowlingGame() {
  this.rolls = [];
  this.roll_counter = 0;
  this.current_score = 0;
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  for(var frame = 0; frame < 10 ; frame++){
    if (this.isStrike(this.roll_counter)){
      this.current_score += 10 + this.rolls[this.roll_counter + 1] + this.rolls[this.roll_counter + 2];
      this.roll_counter += 1;
    }else if (this.isSpare(this.roll_counter)){
      this.current_score += 10 + this.rolls[this.roll_counter + 2];
      this.roll_counter += 2;
    }else{
      this.current_score += this.rolls[this.roll_counter] + this.rolls[this.roll_counter + 1];
      this.roll_counter += 2;
    };
  };
  return this.current_score
};

BowlingGame.prototype.isSpare = function (roll_counter) {
  return (this.rolls[roll_counter] + this.rolls[roll_counter + 1]) === 10
};

BowlingGame.prototype.isStrike = function (roll_counter) {
  return this.rolls[roll_counter] === 10
};
