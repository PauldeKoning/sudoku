import PuzzleFactory from "../../src/model/puzzle.factory";

describe("Solve a puzzle test", () => {
  it("Should solve a 4x4 puzzle", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.4x4');

    puzzle.solve();

    expect(puzzle.getPuzzle().validate().length).toBe(0);
  });

  it("Should solve a 6x6 puzzle", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.6x6');

    puzzle.solve();

    expect(puzzle.getPuzzle().validate().length).toBe(0);
  });

  it("Should solve a 9x9 puzzle", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.9x9');

    puzzle.solve();

    expect(puzzle.getPuzzle().validate().length).toBe(0);
  });

  it("Should solve a jigsaw puzzle", () => {
    const puzzle = PuzzleFactory.getFactory().createPuzzle('puzzle.jigsaw');

    puzzle.solve();

    expect(puzzle.getPuzzle().validate().length).toBe(0);
  });
});