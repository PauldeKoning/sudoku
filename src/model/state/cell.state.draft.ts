import Cell from '../cell';
import ICellState from './cell.state.interface';

export default class CellStateDraft implements ICellState {
  private cell: Cell;

  constructor(cell: Cell) {
    this.cell = cell;
  }

  setCell(num: number): void {
    if (this.cell.value !== 0) {
      return;
    }

    if (this.cell.draftValues.has(num)) {
      this.cell.draftValues.delete(num);
    } else {
      this.cell.draftValues.add(num);
    }
  }
}
