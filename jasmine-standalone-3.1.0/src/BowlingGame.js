function BowlingGame() {
  this.current_score = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.current_score += pins
};

BowlingGame.prototype.score = function() {
  return this.current_score
};
