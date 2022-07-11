import { Box, Cell } from './model/puzzle/puzzle.item';
import readFile from './util/file.reader';

console.log('Hello World');

(async () => {
  const file = await readFile('dist/puzzles/puzzle.9x9');

  const puzzle = new Box();

  file.forEach(b => {
    const box = new Box();
    b.forEach(c => box.add(new Cell(c.x, c.y, c.value)));
    puzzle.add(box);
  });

  console.log('Puzzle created');
})();
