import { Puzzle } from '../puzzle.factory';
import { CompositeCells, PuzzleItem } from './puzzle.item';
import PuzzleUtil from '../../util/puzzle.parse.util';

export class SixxSixPuzzle implements Puzzle {
  private readonly puzzle: CompositeCells;

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
