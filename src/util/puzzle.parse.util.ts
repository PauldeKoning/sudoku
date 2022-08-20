import CompositeCells from '../model/cell.composite';
import Cell from '../model/cell';
import PuzzleWrapper from '../model/puzzle.wrapper';

export default class PuzzleUtil {
  static parseLinearPuzzle(
    puzzleString: string,
    cellAmountPerRow: number,
    boxWidth: number,
    offsetX: number = 0,
    offsetY: number = 0
  ): PuzzleWrapper {
    if (puzzleString.length % cellAmountPerRow !== 0) {
      throw Error(
        'puzzleString length is incorrect. Should be puzzleString.length % cellAmountPerRow'
      );
    }

    const wrapper: PuzzleWrapper = new PuzzleWrapper();

    for (let i = 0; i < puzzleString.length; i++) {
      const { cellRow, boxPerRow, boxRow, cellColumn, boxColumn } = PuzzleUtil.calculateCellInfo(
        i,
        cellAmountPerRow,
        boxWidth
      );

      const boxNumber = boxRow * boxPerRow + boxColumn;

      PuzzleUtil.addCellToWrapper(
        wrapper,
        boxNumber,
        cellColumn + offsetX,
        cellRow + offsetY,
        Number(puzzleString[i])
      );
    }

    PuzzleUtil.addRowsToWrapper(wrapper, puzzleString, cellAmountPerRow);

    return wrapper;
  }

  static parseJigsawPuzzle(jigsawString: string): PuzzleWrapper {
    const cells = jigsawString.split('=');

    if (cells.length !== 82) {
      throw Error('jigsawString should have 82 cells');
    }

    // Remove first as this is the jigsaw version
    cells.shift();

    const wrapper: PuzzleWrapper = new PuzzleWrapper();
    let valueString = '';
    cells.forEach((c, i) => {
      if (!(c[0] === String(Number(c[0])) && c[2] === String(Number(c[2])))) {
        throw Error('jigsawString is incorrect');
      }

      const value = Number(c[0]);
      const subgrid = Number(c[2]);

      valueString += value;

      const { cellColumn, cellRow } = PuzzleUtil.calculateCellInfo(i, 9, 3);

      PuzzleUtil.addCellToWrapper(wrapper, subgrid, cellColumn, cellRow, value);
    });

    PuzzleUtil.addRowsToWrapper(wrapper, valueString, 9);

    return wrapper;
  }

  private static addRowsToWrapper(
    wrapper: PuzzleWrapper,
    str: string,
    cellAmountPerRow: number
  ) {
    for (let i = 0; i < str.length; i += cellAmountPerRow) {
      const vertical: CompositeCells = new CompositeCells();
      const horizontal: CompositeCells = new CompositeCells();

      for (let x = 0; x < cellAmountPerRow; x++) {
        const y = Math.floor(i / cellAmountPerRow);
        const cell = wrapper.getCell(x, y);
        horizontal.add(cell ? cell : new Cell(x, y, Number(str[x + y * cellAmountPerRow])));
        vertical.add(cell ? cell : new Cell(y, x, Number(str[y + x * cellAmountPerRow])));
      }

      wrapper.add(vertical);
      wrapper.add(horizontal);
    }
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

  private static addCellToWrapper(
    wrapper: PuzzleWrapper,
    boxNumber: number,
    x: number,
    y: number,
    value: number
  ): void {
    if (!wrapper.getBox(boxNumber)) wrapper.add(new CompositeCells());

    const cell = wrapper.getCell(x, y);

    (wrapper.getBox(boxNumber) as CompositeCells).add(
      cell ? cell : new Cell(x, y, value, boxNumber)
    );
  }
}
