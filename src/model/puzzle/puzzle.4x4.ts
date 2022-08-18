import { Puzzle } from '../puzzle.factory';
import { Box, PuzzleItem } from './puzzle.item';
import PuzzleUtil from '../../util/parse.util';

export class FourxFourPuzzle implements Puzzle {
  private readonly puzzle: Box;

  constructor(puzzleString: string) {
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [4, 4];
  }
}
