import PuzzleFactory from '../../src/model/puzzle.factory';
import PuzzleWrapper from '../../src/model/puzzle.wrapper';

describe('Test samurai specific methods', () => {
  it('Should return 9 when getting max num', () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.samurai');

    expect(puzzle.getNumRange()).toBe(9);
  });

  it('Should return 21,21 when getting bounds', () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.samurai');

    expect(puzzle.getBounds()).toStrictEqual([21, 21]);
  });

  it('Should return return puzzle', () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.samurai');

    expect(puzzle.getPuzzle()).toBeInstanceOf(PuzzleWrapper);
  });
});
