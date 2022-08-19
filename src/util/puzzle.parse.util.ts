import { Box, Cell, CellInfo } from '../model/puzzle/puzzle.item';

export default class PuzzleUtil {
  static parseLinearPuzzle(
    puzzleString: string,
    cellAmountPerRow: number,
    boxWidth: number,
    offsetX: number = 0,
    offsetY: number = 0
  ): Box {
    if (puzzleString.length % cellAmountPerRow !== 0) {
      throw Error(
        'puzzleString length is incorrect. Should be puzzleString.length % cellAmountPerRow'
      );
    }

    const boxes: CellInfo[][] = [];

    for (let i = 0; i < puzzleString.length; i++) {
      const { cellRow, boxPerRow, boxRow, cellColumn, boxColumn } = PuzzleUtil.calculateCellInfo(
        i,
        cellAmountPerRow,
        boxWidth
      );

      const boxNumber = boxRow * boxPerRow + boxColumn;

      PuzzleUtil.addCellToBoxes(
        boxes,
        boxNumber,
        cellColumn + offsetX,
        cellRow + offsetY,
        Number(puzzleString[i])
      );
    }

    return PuzzleUtil.createPuzzle(boxes);
  }

  static parseJigsawPuzzle(jigsawString: string) {
    const cells = jigsawString.split('=');

    if (cells.length !== 82) {
      throw Error('jigsawString should have 82 cells');
    }

    // Remove first as this is the jigsaw version
    cells.shift();

    const boxes: CellInfo[][] = [];

    cells.forEach((c, i) => {
      const value = Number(c[0]);
      const subgrid = Number(c[2]);
      // create box with value and box nr = subgrid

      const { cellColumn, cellRow } = PuzzleUtil.calculateCellInfo(i, 9, 3);

      PuzzleUtil.addCellToBoxes(boxes, subgrid, cellColumn, cellRow, value);
    });

    return PuzzleUtil.createPuzzle(boxes);
  }

  private static calculateCellInfo(i: number, cellAmountPerRow: number, boxWidth: number) {
    const cellRow = Math.floor(i / cellAmountPerRow);
    const boxPerRow = Math.floor(cellAmountPerRow / boxWidth);

    return {
      cellRow,
      boxPerRow,
      boxRow: Math.floor(cellRow / boxPerRow),
      cellColumn: i - cellAmountPerRow * cellRow,
      boxColumn: Math.floor((i - cellAmountPerRow * cellRow) / boxWidth)
    };
  }

  private static addCellToBoxes(
    boxes: CellInfo[][],
    boxNumber: number,
    x: number,
    y: number,
    value: number
  ): void {
    if (!boxes[boxNumber]) boxes[boxNumber] = [];

    boxes[boxNumber].push({
      x,
      y,
      value
    });
  }

  private static createPuzzle(boxes: CellInfo[][]): Box {
    const puzzle = new Box();

    boxes.forEach((b) => {
      const box = new Box();
      b.forEach((c) => box.add(new Cell(c.x, c.y, c.value)));
      puzzle.add(box);
    });

    return puzzle;
  }
}
