import PuzzleFactory from './model/puzzle.factory';

console.log('Hello World');

(async () => {
  const factory = new PuzzleFactory();

  const puzzle = await factory.createPuzzle('dist/puzzles/puzzle.jigsaw');

  console.log('Puzzle created');
})();
