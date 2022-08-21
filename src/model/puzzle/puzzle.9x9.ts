import PuzzleItem from '../puzzle.item.interface';
import Puzzle from '../puzzle.interface';
import PuzzleUtil from '../../util/puzzle.parse.util';
import PuzzleWrapper from '../puzzle.wrapper';

export class NinexNinePuzzle implements Puzzle {
  private readonly puzzle: PuzzleWrapper;

  constructor(puzzleString: string) {
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
