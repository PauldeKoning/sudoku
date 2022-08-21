import Puzzle from '../puzzle.abstract';
import PuzzleUtil from '../../util/puzzle.parse.util';
import PuzzleItem from '../puzzle.item.interface';

export class JigsawPuzzle extends Puzzle {
  private readonly puzzle: PuzzleItem;

  constructor(jigsawString: string) {
    super();
    this.puzzle = PuzzleUtil.parseJigsawPuzzle(jigsawString);
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [9, 9];
  }

  getNumRange(): number {
    return 9;
  }
}
