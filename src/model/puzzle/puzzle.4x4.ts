import { Puzzle } from '../puzzle.factory';
import { Box } from './puzzle.item';
import PuzzleUtil from '../../util/parse.util';

export class FourxFourPuzzle implements Puzzle {
  private puzzle: Box;

  constructor(puzzleString: string) {
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2);
  }
}
