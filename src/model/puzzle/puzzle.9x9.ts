import PuzzleItem from '../puzzle.item.interface';
import CompositeCells from '../cell.composite';
import Puzzle from '../puzzle.interface';
import PuzzleUtil from '../../util/puzzle.parse.util';

export class NinexNinePuzzle implements Puzzle {
  private readonly puzzle: CompositeCells;

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
