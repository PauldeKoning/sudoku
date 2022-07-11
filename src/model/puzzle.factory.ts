import { PuzzleItem } from './puzzle/puzzle.item';

class PuzzleFactory {
  private instances: Map<string, { new(puzzle: PuzzleItem[]): Puzzle }>;

  constructor() {
    this.instances = new Map<string, { new(puzzle: PuzzleItem[]): Puzzle }>();
    this.instances.set('4x4', FourxFourPuzzle);
    const test = this.instances.get('4x4')!;
    new test([]);
  }
}

interface Puzzle {

}

export class FourxFourPuzzle implements Puzzle{
  private puzzle: PuzzleItem[];

  constructor(puzzle: PuzzleItem[]) {
    this.puzzle = puzzle;
  }

}