import PuzzleFactory from '../../src/model/puzzle.factory';
import PuzzleWrapper from '../../src/model/puzzle.wrapper';
import { SamuraiPuzzle } from "../../src/model/puzzle/puzzle.samurai";

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

  it("Should throw error when input has too many 9x9 puzzles", () => {
    const str = '038009602076400000000000300500000406300008090007000010400600000000900000700010000\n' +
      '002050310800200000000019000460000080200003600005006100000000900000000062000072000\n' +
      '000400000000230000000700000000000060108000905070000000000002000000013000000005000\n' +
      '000630000560000000008000000001300600004100008020000049000260000000005004096010500\n' +
      '000630000560000000008000000001300600004100008020000049000260000000005004096010500\n' +
      '000050001000003000000004006040000100070500008803000005007000000000001960406700530';
    expect(() => new SamuraiPuzzle(str)).toThrowError();
  });
});
