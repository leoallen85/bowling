var Game = require('../lib/game');

describe("A game", function() {

  it("calculates a game's score", function() {
    game = new Game(generateFrames());
    expect(game.score()).toEqual(150);
  });

  function generateFrames() {
    var frames = [];

    for(i = 0; i < 10; i++) {
      var frame = jasmine.createSpyObj('frame', ['total']);
      frame.total.andReturn(15);
      frames.push(frame);
    }

    return frames;
  }
});
