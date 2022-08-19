import Cell from '../../src/model/cell';
import CompositeCells from '../../src/model/cell.composite';
import { CellState } from '../../src/model/cell.state.enum';

describe("Cell composite tests", () => {
  it("Should be able to set a cell", () => {
    const cell = new Cell(5, 5);

    const composite = new CompositeCells();

    composite.add(cell);

    cell.changeCellState(CellState.DEFINITIVE);
    composite.setCell(5, 5, 3);

    expect(cell.value).toBe(3);
  });

  it("Should not return a cell if x and y do not exist", () => {
    const cell = new Cell(5, 5);

    const composite = new CompositeCells();

    composite.add(cell);

    const getCell = composite.getCell(2, 5);

    expect(getCell).toBeUndefined();
  });

  it("Should be able to change the cell state of all children", () => {
    const cell1 = new Cell(4, 2);
    const cell2 = new Cell(5, 3);

    const composite = new CompositeCells();

    composite.add(cell1);
    composite.add(cell2);

    composite.changeCellState(CellState.DEFINITIVE);

    composite.setCell(4, 2, 2);
    composite.setCell(5, 3, 5);

    expect(cell1.value).toBe(2);
    expect(cell2.value).toBe(5);
  });

  it("Should be able to remove a cell", () => {
      const cell = new Cell(5, 5);

      const composite = new CompositeCells();

      composite.add(cell);
      composite.remove(cell);

      composite.setCell(5, 5, 4);

      expect(cell.draftValues.has(4)).toBeFalsy();
  });
});