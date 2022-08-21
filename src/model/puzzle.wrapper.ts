import PuzzleItem from './puzzle.item.interface';
import Cell from './cell';
import { CellState } from './cell.state.enum';

export default class PuzzleWrapper implements PuzzleItem {

  protected readonly children: PuzzleItem[] = [];

  add(child: PuzzleItem): void {
    this.children.push(child);
  }

  remove(child: PuzzleItem): void {
    this.children.splice(this.children.indexOf(child), 1);
  }

  changeCellState(state: CellState) {
    this.children.forEach((c) => c.changeCellState(state));
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

  validate(): Cell[] {
    let wrongCells: Set<Cell> = new Set<Cell>();

    this.children.forEach(c => {
      const cells = c.validate();
      cells.forEach(cell => {
        if (!wrongCells.has(cell)) wrongCells.add(cell)
      });
    });

    return Array.from(wrongCells.values());
  }

}