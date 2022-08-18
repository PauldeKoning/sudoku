import PuzzleFactory, { Puzzle } from './model/puzzle.factory';

console.log('Hello World');

const factory = new PuzzleFactory();

const puzzle: Puzzle = factory.createPuzzle('puzzle.4x4');

console.log(puzzle.getPuzzle().getCell(2, 0));

console.log('Puzzle created');
