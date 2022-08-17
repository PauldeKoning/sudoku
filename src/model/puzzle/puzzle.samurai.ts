import { Puzzle } from '../puzzle.factory';
import { Box } from './puzzle.item';
import PuzzleUtil from '../../util/parse.util';

export class SamuraiPuzzle implements Puzzle {
  private puzzle: Box;
  private offsetKeysX: Map<number, number>;
  private offsetKeysY: Map<number, number>;

  constructor(samuraiString: string) {
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

    const puzzle = new Box();
    puzzleStrings
      .map((p, i) => PuzzleUtil.parseLinearPuzzle(p, 9, 3, this.getOffsetX(i), this.getOffsetY(i)))
      .forEach((p) => puzzle.add(p));

    this.puzzle = puzzle;
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
