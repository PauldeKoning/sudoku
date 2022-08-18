import { Puzzle } from '../puzzle.factory';
import { Box, PuzzleItem } from './puzzle.item';
import PuzzleUtil from '../../util/parse.util';

export class SixxSixPuzzle implements Puzzle {
  private readonly puzzle: Box;

  constructor(puzzleString: string) {
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 6, 2);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [6, 6];
  }
}
