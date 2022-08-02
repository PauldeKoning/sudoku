import readFile from '../util/file.reader';
import { FourxFourPuzzle } from './puzzle/puzzle.4x4';
import { SixxSixPuzzle } from './puzzle/puzzle.6x6';
import { NinexNinePuzzle } from './puzzle/puzzle.9x9';
import { JigsawPuzzle } from './puzzle/puzzle.jigsaw';
import { SamuraiPuzzle } from './puzzle/puzzle.samurai';

export default class PuzzleFactory {
  private static readonly PUZZLE_TYPES = ['4x4', '6x6', '9x9', 'jigsaw', 'samurai'];
  private instances: Map<string, { new(puzzle: string): Puzzle }>;

  constructor() {
    this.instances = new Map<string, { new(puzzle: string): Puzzle }>();
    this.instances.set('4x4', FourxFourPuzzle);
    this.instances.set('6x6', SixxSixPuzzle);
    this.instances.set('9x9', NinexNinePuzzle);
    this.instances.set('jigsaw', JigsawPuzzle);
    this.instances.set('samurai', SamuraiPuzzle);
  }

  async createPuzzle(path: string): Promise<Puzzle> {
    const puzzleType = path.split('.').at(-1);

    if (!puzzleType || !PuzzleFactory.PUZZLE_TYPES.includes(puzzleType)) {
      throw Error('Invalid puzzle type');
    }

    return new (this.instances.get(puzzleType)!)(await readFile(path));
  }
}

export interface Puzzle {
  // loadPuzzle(path: string): void;
}