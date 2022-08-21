import PuzzleItem from './puzzle.item.interface';
import Cell from './cell';

export default abstract class Puzzle {
  abstract getPuzzle(): PuzzleItem;

  abstract getBounds(): [number, number];

  abstract getNumRange(): number;

  solve(): boolean {
    const cell = this.getFirstEmptyCell();
    if (!cell) {
      return true;
    }

    for (let i = 1; i < this.getNumRange() + 1; i++) {
      cell.value = i;
      const validation = this.getPuzzle().validate();
      if (!validation.find((c) => c.x === cell.x && c.y === cell.y)) {
        if (this.solve()) {
          return true;
        }
      }
    }

    cell.value = 0;
    return false;
  }

  getFirstEmptyCell(x: number = 0, y: number = 0): Cell | undefined {
    const cell = this.getPuzzle().getCell(x, y);
    const [maxX, maxY] = this.getBounds();
    if (cell && cell.value === 0) return cell;
    if (x < maxX) {
      return this.getFirstEmptyCell(x + 1, y);
    } else {
      if (y < maxY) return this.getFirstEmptyCell(0, y + 1);
    }
  }
}
