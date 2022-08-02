import { Box, Cell, CellInfo } from './puzzle.item';
import { Puzzle } from '../puzzle.factory';
import parseBasicPuzzle from '../../util/parse.basic.puzzle';

export class NinexNinePuzzle implements Puzzle {
  private puzzle: Box;

  constructor(puzzleString: string) {
    this.puzzle = parseBasicPuzzle(puzzleString, 9, 3);
  }
}