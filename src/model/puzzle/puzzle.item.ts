export interface CellInfo {
  x: number;
  y: number;
  value: number;
}

export interface PuzzleItem {
  setCell(x: number, y: number, value: number): void;
  // -1 means cell is not found
  getCell(x: number, y: number): number;
  changeCellState(state: CellState): void;
}

export enum CellState {
  DRAFT,
  DEFINITIVE
}

export interface ICellState {
  addNumber(num: number): void;
  removeNumber(num: number): void;
}

export class CellStateDraft implements ICellState {
  cell: Cell;

  constructor(cell: Cell) {
    this.cell = cell;
  }

  addNumber(num: number): void {
    this.cell.draftValues.add(num);
  }

  removeNumber(num: number): void {
    this.cell.draftValues.delete(num);
  }
}

export class CellStateDefinitive implements ICellState {
  cell: Cell;

  constructor(cell: Cell) {
    this.cell = cell;
  }

  addNumber(num: number): void {
    this.cell.value = num;
  }

  removeNumber(num: number): void {
    this.cell.value = 0;
  }
}

export class Cell implements PuzzleItem, CellInfo {
  x: number;
  y: number;
  value: number;
  state: ICellState = new CellStateDraft(this);
  draftValues: Set<number>;

  constructor(x: number, y: number, value: number = 0) {
    this.x = x;
    this.y = y;
    this.value = value;
    this.draftValues = new Set<number>();
  }

  setCell(x: number, y: number, value: number) {
    if (!(this.x === x && this.y === y)) return;

    this.value = value;
  }

  changeCellState(state: CellState) {
    if (state === CellState.DRAFT) {
      this.state = new CellStateDraft(this);
    } else if (state === CellState.DEFINITIVE) {
      this.state = new CellStateDefinitive(this);
    }
  }
}

export class Box implements PuzzleItem {
  children: PuzzleItem[] = [];

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

  getCell(x: number, y: number): number {
    for (let child of this.children) {
      const cell = child.getCell(x, y);
      if (cell !== -1) return cell;
    }

    return -1;
  }

  changeCellState(state: CellState) {
    this.children.forEach((c) => c.changeCellState(state));
  }
}
