import PuzzleFactory from './model/puzzle.factory';
import Puzzle from './model/puzzle.abstract';
import { CellState } from './model/cell.state.enum';

const factory = PuzzleFactory.getFactory();

const puzzle: Puzzle = factory.createPuzzle('puzzle3.4x4');

puzzle.getPuzzle().changeCellState(CellState.DEFINITIVE);

const validated = puzzle.getPuzzle().validate();

puzzle.getPuzzle().changeCellState(CellState.DEFINITIVE);

puzzle.getPuzzle().setCell(2, 2, 4);

const validated2 = puzzle.getPuzzle().validate();
