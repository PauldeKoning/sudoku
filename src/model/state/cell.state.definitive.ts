import Cell from '../cell';
import ICellState from './cell.state.interface';

export default class CellStateDefinitive implements ICellState {
  cell: Cell;

  constructor(cell: Cell) {
    this.cell = cell;
  }

  setCell(num: number): void {
    if (this.cell.value === num) {
      this.cell.value = 0;
    } else {
      this.cell.value = num;
    }
  }
}
