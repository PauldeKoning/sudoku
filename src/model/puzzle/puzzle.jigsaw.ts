import { Puzzle } from '../puzzle.factory';
import { Box } from './puzzle.item';
import PuzzleUtil from '../../util/parse.util';

export class JigsawPuzzle implements Puzzle {
  private puzzle: Box;

  constructor(jigsawString: string) {
    this.puzzle = PuzzleUtil.parseJigsawPuzzle(jigsawString);
  }
}
