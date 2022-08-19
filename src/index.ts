import PuzzleFactory from './model/puzzle.factory';
import Puzzle from './model/puzzle.interface';

console.log('Hello World');

const factory = new PuzzleFactory();

const puzzle: Puzzle = factory.createPuzzle('puzzle.4x4');

console.log(puzzle.getPuzzle().validate());

console.log(puzzle.getPuzzle().getCell(2, 0));

console.log('Puzzle created');
