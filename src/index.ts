import PuzzleFactory from './model/puzzle.factory';
import Puzzle from './model/puzzle.interface';
import { CellState } from './model/cell.state.enum';

console.log('Hello World');

const factory = new PuzzleFactory();

const puzzle: Puzzle = factory.createPuzzle('puzzle.4x4');

const validated = puzzle.getPuzzle().validate();

puzzle.getPuzzle().changeCellState(CellState.DEFINITIVE);

puzzle.getPuzzle().setCell(0, 0, 1);
puzzle.getPuzzle().setCell(1, 0, 1);
puzzle.getPuzzle().setCell(2, 0, 1);
puzzle.getPuzzle().setCell(3, 0, 1);

const validated2 = puzzle.getPuzzle().validate();


console.log('Puzzle created');
