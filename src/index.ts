import PuzzleFactory from './model/puzzle.factory';
import Puzzle from './model/puzzle.interface';
import { CellState } from './model/cell.state.enum';

console.log('Hello World');

const factory = new PuzzleFactory();

const puzzle: Puzzle = factory.createPuzzle('puzzle3.4x4');

puzzle.getPuzzle().changeCellState(CellState.DEFINITIVE);


console.log(puzzle.solve());

const validated = puzzle.getPuzzle().validate();

puzzle.getPuzzle().changeCellState(CellState.DEFINITIVE);

puzzle.getPuzzle().setCell(2, 2, 4);

const validated2 = puzzle.getPuzzle().validate();


console.log('Puzzle created');
