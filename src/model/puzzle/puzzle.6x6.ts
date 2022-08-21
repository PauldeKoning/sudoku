import Puzzle from '../puzzle.interface';
import PuzzleItem from '../puzzle.item.interface';
import PuzzleUtil from '../../util/puzzle.parse.util';
import PuzzleWrapper from '../puzzle.wrapper';

export class SixxSixPuzzle extends Puzzle {
  private readonly puzzle: PuzzleWrapper;

  constructor(puzzleString: string) {
    super();
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 6, 3);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [6, 6];
  }

  getNumRange(): number {
    return 6;
  }
}
