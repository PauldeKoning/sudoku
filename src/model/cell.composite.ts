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

  changeCellState(state: CellState) {
    this.children.forEach((c) => c.changeCellState(state));
  }

  validate(): Cell[] {
    const wrongCells: Cell[] = [];
    this.children.forEach((c) => wrongCells.push(c.validate()[0]));

    for (let i = 1; i < this.children.length + 1; i++) {
      const cells = wrongCells.filter((c) => c.value === i);
      if (cells.length !== 1) continue;
      wrongCells.splice(
        wrongCells.findIndex((c) => c.value === i),
        1
      );
    }

    return wrongCells;
  }
}
