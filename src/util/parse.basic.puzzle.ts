import { Box, Cell, CellInfo } from '../model/puzzle/puzzle.item';

export default function parseBasicPuzzle(puzzleString: string, cellAmountPerRow: number, boxWidth: number): Box {
  const boxes: CellInfo[][] = [];

  for (let i = 0; i < puzzleString.length; i++) {
    const cellRow = Math.floor(i / cellAmountPerRow);
    const boxPerRow = Math.floor(cellAmountPerRow / boxWidth);
    const boxRow = Math.floor(cellRow / boxPerRow);

    const cellColumn = i - cellAmountPerRow * cellRow;
    const boxColumn = Math.floor((i - cellAmountPerRow * cellRow) / boxWidth);

    const boxNumber = boxRow * boxPerRow + boxColumn;

    console.log(i, 'is on cell row', cellRow, ', box row', boxRow, ', cell column', cellColumn, 'and box column', boxColumn, 'with box nr', boxNumber);

    if (!boxes[boxNumber])
      boxes[boxNumber] = [];

    boxes[boxNumber].push({
      x: cellColumn,
      y: cellRow,
      value: Number(puzzleString[i])
    });
  }

  const puzzle = new Box();

  boxes.forEach(b => {
    const box = new Box();
    b.forEach(c => box.add(new Cell(c.x, c.y, c.value)));
    puzzle.add(box);
  });

  return puzzle;
}