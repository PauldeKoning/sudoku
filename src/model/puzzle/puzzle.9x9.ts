import PuzzleItem from '../puzzle.item.interface';
import Puzzle from '../puzzle.abstract';
import PuzzleUtil from '../../util/puzzle.parse.util';

export class NinexNinePuzzle extends Puzzle {
  private readonly puzzle: PuzzleItem;

  constructor(puzzleString: string) {
    super();
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 9, 3);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [9, 9];
  }

  getNumRange(): number {
    return 9;
  }
}
