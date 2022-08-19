import PuzzleItem from './puzzle.item.interface';
import Cell from './cell';
import { CellState } from './cell.state.enum';

export default class CompositeCells implements PuzzleItem {
  protected readonly children: PuzzleItem[] = [];

  add(child: PuzzleItem): void {
    this.children.push(child);
  }

  remove(child: PuzzleItem): void {
    this.children.splice(this.children.indexOf(child), 1);
  }

  setCell(x: number, y: number, value: number): void {
    this.children.forEach((c) => c.setCell(x, y, value));
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

  validate(): Cell[] {
    const wrongCells: Cell[] = [];

    const allCells: Cell[] = [];
    this.children.forEach(c => {
      wrongCells.concat(c.validate());
      // if current cell composite is a box/row

      if (c instanceof Cell) {
        allCells.push(c);
      }
    });

    for (let i = 1; i < this.children.length + 1; i++) {
      const cell = allCells.findIndex(c => c.value === i)
      if (cell !== -1) allCells.splice(cell, 1);
    }

    return allCells;
  }
}