import { Puzzle } from '../puzzle.factory';
import { Box } from './puzzle.item';
import parseBasicPuzzle from '../../util/parse.basic.puzzle';

export class SixxSixPuzzle implements Puzzle {
  private puzzle: Box;

  constructor(puzzleString: string) {
    this.puzzle = parseBasicPuzzle(puzzleString, 6, 2);
  }
}