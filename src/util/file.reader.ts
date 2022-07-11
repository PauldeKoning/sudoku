import fs from 'fs/promises';
import { CellInfo } from '../model/puzzle/puzzle.item';

export default async function readFile(path: string): Promise<CellInfo[][]> {
  const str: string = await fs.readFile(path, 'utf-8');

  const boxes: CellInfo[][] = [];

  for (let i = 0; i < str.length; i++) {
    const cellAmount = 9;
    const boxAmount = 3;

    const cellRow = Math.floor(i / cellAmount);
    const boxRow = Math.floor(cellRow / boxAmount);

    const cellColumn = i - cellAmount * cellRow;
    const boxColumn = Math.floor((i - cellAmount * cellRow) / boxAmount);

    const boxNumber = boxRow * boxAmount + boxColumn;

    console.log(i, 'is on cell row', cellRow, ', box row', boxRow, ', cell column', cellColumn, 'and box column', boxColumn, 'with box nr', boxNumber);

    if (!boxes[boxNumber])
      boxes[boxNumber] = [];

    boxes[boxNumber].push({
      x: cellColumn,
      y: cellRow,
      value: Number(str[i])
    });
  }

  return boxes;
}