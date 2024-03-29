import PuzzleUtil from '../../util/puzzle.parse.util';
import PuzzleItem from '../puzzle.item.interface';
import Puzzle from '../puzzle.abstract';
import PuzzleWrapper from '../puzzle.wrapper';

export class SamuraiPuzzle extends Puzzle {
  private readonly puzzle: PuzzleItem;
  private offsetKeysX: Map<number, number>;
  private offsetKeysY: Map<number, number>;

  constructor(samuraiString: string) {
    super();
    const puzzleStrings = samuraiString.split(/\r?\n/);

    this.offsetKeysX = new Map<number, number>([
      [0, 0],
      [1, 12],
      [2, 6],
      [3, 0],
      [4, 12]
    ]);

    this.offsetKeysY = new Map<number, number>([
      [0, 0],
      [1, 0],
      [2, 6],
      [3, 12],
      [4, 12]
    ]);

    const puzzle = new PuzzleWrapper();
    puzzleStrings.forEach((p, i) => {
      puzzle.add(
        PuzzleUtil.parseLinearPuzzle(p, 9, 3, this.getOffsetX(i), this.getOffsetY(i), puzzle)
      );
    });

    this.puzzle = puzzle;
  }

  getPuzzle(): PuzzleItem {
    return this.puzzle;
  }

  getBounds(): [number, number] {
    return [21, 21];
  }

  getNumRange(): number {
    return 9;
  }

  // NOTE about postfix operator usage: https://github.com/microsoft/TypeScript/issues/9619#issuecomment-232490856
  private getOffsetX(i: number): number {
    if (!this.offsetKeysX.has(i)) throw new Error();

    return this.offsetKeysX.get(i)!;
  }

  private getOffsetY(i: number): number {
    if (!this.offsetKeysY.has(i)) throw new Error();

    return this.offsetKeysY.get(i)!;
  }
}
