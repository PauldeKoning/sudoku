import PuzzleFactory from '../../src/model/puzzle.factory';
import { FourxFourPuzzle } from '../../src/model/puzzle/puzzle.4x4';
import { SixxSixPuzzle } from '../../src/model/puzzle/puzzle.6x6';
import { NinexNinePuzzle } from '../../src/model/puzzle/puzzle.9x9';
import { JigsawPuzzle } from '../../src/model/puzzle/puzzle.jigsaw';
import { SamuraiPuzzle } from '../../src/model/puzzle/puzzle.samurai';

describe("Puzzle factory test", () => {
  it("Should return the correct puzzle type for 4x4", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.4x4');

    expect(puzzle).toBeInstanceOf(FourxFourPuzzle);
  });

  it("Should return the correct puzzle type for 6x6", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.6x6');

    expect(puzzle).toBeInstanceOf(SixxSixPuzzle);
  });

  it("Should return the correct puzzle type for 9x9", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.9x9');

    expect(puzzle).toBeInstanceOf(NinexNinePuzzle);
  });

  it("Should return the correct puzzle type for jigsaw", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.jigsaw');

    expect(puzzle).toBeInstanceOf(JigsawPuzzle);
  });

  it("Should return the correct puzzle type for samurai", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.samurai');

    expect(puzzle).toBeInstanceOf(SamuraiPuzzle);
  });

  it("Should throw an error when puzzle type is incorrect", () => {
    expect(() => PuzzleFactory.getFactory().createPuzzle('puzzle.incorrecttype')).toThrowError();
  });

  it("Should throw an error when puzzle name is not found", () => {
    expect(() => PuzzleFactory.getFactory().createPuzzle('puzzlddsae.4x4')).toThrowError();
  });

  it("Should throw an error when name does not include a dot", () => {
    expect(() => PuzzleFactory.getFactory().createPuzzle('puzzlddsae4x4')).toThrowError();
  });

  it("Should throw an error when name does not have an input", () => {
    expect(() => PuzzleFactory.getFactory().createPuzzle('')).toThrowError();
  });
})