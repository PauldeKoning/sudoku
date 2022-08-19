import { Puzzle } from '../puzzle.factory';
import { CompositeCells, PuzzleItem } from './puzzle.item';
import PuzzleUtil from '../../util/puzzle.parse.util';

export class JigsawPuzzle implements Puzzle {
  private readonly puzzle: CompositeCells;

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
