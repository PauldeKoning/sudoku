import Puzzle from '../puzzle.interface';
import PuzzleUtil from '../../util/puzzle.parse.util';
import PuzzleItem from '../puzzle.item.interface';
import PuzzleWrapper from '../puzzle.wrapper';

export class JigsawPuzzle implements Puzzle {
  private readonly puzzle: PuzzleWrapper;

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
