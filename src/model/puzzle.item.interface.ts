import Cell from './cell';
import { CellState } from './cell.state.enum';

export default interface PuzzleItem {
  setCell(x: number, y: number, value: number): void;

  getCell(x: number, y: number): Cell | undefined;

  changeCellState(state: CellState): void;

  validate(): Cell[];
}
