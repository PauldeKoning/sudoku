import { Box, PuzzleItem } from './puzzle.item';
import { Puzzle } from '../puzzle.factory';
import PuzzleUtil from '../../util/puzzle.parse.util';

export class NinexNinePuzzle implements Puzzle {
  private readonly puzzle: Box;

  constructor(puzzleString: string) {
    this.puzzle = PuzzleUtil.parseLinearPuzzle(puzzleString, 9, 3);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [9, 9];
  }
}
