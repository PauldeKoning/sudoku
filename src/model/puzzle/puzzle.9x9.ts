import { Box } from './puzzle.item';
import { Puzzle } from '../puzzle.factory';
import PuzzleUtil from '../../util/parse.util';

export class NinexNinePuzzle implements Puzzle {
  private puzzle: Box;

  constructor(puzzleString: string) {
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 9, 3);
  }
}
