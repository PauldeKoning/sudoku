import Puzzle from '../puzzle.abstract';
import PuzzleItem from '../puzzle.item.interface';
import PuzzleUtil from '../../util/puzzle.parse.util';
import PuzzleWrapper from '../puzzle.wrapper';

export class FourxFourPuzzle extends Puzzle {
  private readonly puzzle: PuzzleWrapper;

  constructor(puzzleString: string) {
    super();
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [4, 4];
  }

  getNumRange(): number {
    return 4;
  }
}
