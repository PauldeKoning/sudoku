import PuzzleItem from './puzzle.item.interface';
import ICellState from './state/cell.state.interface';
import CellStateDraft from './state/cell.state.draft';
import { CellState } from './cell.state.enum';
import CellStateDefinitive from './state/cell.state.definitive';

export default class Cell implements PuzzleItem {
  x: number;
  y: number;
  value: number;
  protected state: ICellState = new CellStateDraft(this);
  private currentState: CellState = CellState.DRAFT;
  draftValues: Set<number>;
  boxNr: number;

  constructor(x: number, y: number, value: number = 0, boxNr = 0) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.draftValues = new Set<number>();
    this.boxNr = boxNr;
  }

  setCell(x: number, y: number, value: number): void {
    if (!(this.x === x && this.y === y)) return;

    this.state.setCell(value);
  }

  getCell(x: number, y: number): Cell | undefined {
    if (!(this.x === x && this.y === y)) return;

    return this;
  }

  changeCellState(state: CellState) {
    if (state === CellState.DRAFT) {
      this.state = new CellStateDraft(this);
      this.currentState = CellState.DRAFT;
    } else if (state === CellState.DEFINITIVE) {
      this.state = new CellStateDefinitive(this);
      this.currentState = CellState.DEFINITIVE;
    }
  }

  getValues(): number | Set<number> {
    return this.currentState === CellState.DRAFT ? this.draftValues : this.value;
  }

  validate(): Cell[] {
    return [this];
  }
}
