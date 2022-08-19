export interface CellInfo {
  x: number;
  y: number;
  value: number;
  draftValues: Set<number>;
  boxNr: number;
}

export interface PuzzleItem {
  setCell(x: number, y: number, value: number): void;
  // -1 means cell is not found
  getCell(x: number, y: number): Cell | undefined;
  changeCellState(state: CellState): void;
}

export enum CellState {
  DRAFT,
  DEFINITIVE
}

export interface ICellState {
  setCell(num: number): void;
}

export class CellStateDraft implements ICellState {
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

export class CellStateDefinitive implements ICellState {
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

export class Cell implements PuzzleItem, CellInfo {
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
    this.boxNr = 0;
  }

  setCell(x: number, y: number, value: number) {
    if (!(this.x === x && this.y === y)) return;

    this.state.setCell(value);
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
}

export class CompositeCells implements PuzzleItem {
  protected readonly children: PuzzleItem[] = [];

  add(child: PuzzleItem): void {
    this.children.push(child);
  }

  remove(child: PuzzleItem): void {
    this.children.splice(this.children.indexOf(child), 1);
  }

  setCell(x: number, y: number, value: number): void {
    this.children.forEach((c) => c.setCell(x, y, value));
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.setCell(x, y, value);
    }
  }

  getCell(x: number, y: number): Cell | undefined {
    for (let child of this.children) {
      const cell = child.getCell(x, y);
      if (cell) return cell;
    }
  }

  getBox(index: number): PuzzleItem {
    return this.children[index];
  }

  changeCellState(state: CellState) {
    this.children.forEach((c) => c.changeCellState(state));
  }
}
