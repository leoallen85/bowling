var Game = function(frames) {
  this.frames = frames;
};

Game.prototype.score = function() {
  return this.frames.reduce(function(score, frame, index, frames){
    return score + frame.total(frames[index + 1], frames[index + 2]);
  }, 0);
};

module.exports = Game;
