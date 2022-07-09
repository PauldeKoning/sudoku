export interface CellInfo {
  x: number;
  y: number;
  value: number;
}

export interface PuzzleItem {
  setCell: (x: number, y: number, value: number) => void;
}

export class Cell implements PuzzleItem, CellInfo {
  x: number;
  y: number;
  value: number;

  constructor(x: number, y: number, value: number = 0) {
    this.x = x;
    this.y = y;
    this.value = value;
  }

  setCell (x: number, y: number, value: number) {
    if (!(this.x === x && this.y === y)) return;

    this.value = value;
  }
}

export class Box implements PuzzleItem {
  children: PuzzleItem[] = [];

  add (child: PuzzleItem): void {
    this.children.push(child);
  }

  remove (child: PuzzleItem): void {
    this.children.splice(this.children.indexOf(child), 1);
  }

  setCell(x: number, y: number, value: number): void {
    this.children.forEach(c => c.setCell(x, y, value));
  }
}