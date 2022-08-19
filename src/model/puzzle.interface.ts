import PuzzleItem from './puzzle.item.interface';

export default interface Puzzle {
  getPuzzle(): PuzzleItem;
  getBounds(): [number, number];
}