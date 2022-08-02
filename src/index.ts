import PuzzleFactory from './model/puzzle.factory';

console.log('Hello World');

(async () => {
  const factory = new PuzzleFactory();

  const puzzle = await factory.createPuzzle('dist/puzzles/puzzle.4x4');

  console.log('Puzzle created');
})();
