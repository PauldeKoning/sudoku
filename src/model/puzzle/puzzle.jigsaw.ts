import { Puzzle } from '../puzzle.factory';
import { Box, PuzzleItem } from './puzzle.item';
import PuzzleUtil from '../../util/puzzle.parse.util';

export class JigsawPuzzle implements Puzzle {
  private readonly puzzle: Box;

  constructor(jigsawString: string) {
    this.puzzle = PuzzleUtil.parseJigsawPuzzle(jigsawString);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [9, 9];
  }
}
