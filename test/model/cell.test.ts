import Cell from '../../src/model/cell';
import { CellState } from '../../src/model/cell.state.enum';

describe("Cell test", () => {
  it("Should have an x, y value given in constructor", () => {
    const cell = new Cell(5, 5);

    expect(cell.x).toBe(5);
    expect(cell.y).toBe(5);
  });

  it("Should have the correct value given in constructor", () => {
    const cell = new Cell(5, 5, 3);

    expect(cell.value).toBe(3);
  });

  it("Should have the correct boxnr given in constructor", () => {
    const cell = new Cell(5, 5, 3, 7);

    expect(cell.boxNr).toBe(7);
  });

  it("Should add a value to the draft values", () => {
    const cell = new Cell(5, 5);

    cell.setCell(5, 5, 2);

    expect(cell.draftValues.has(2)).toBeTruthy();
  });

  it("Should remove a value from the draft values", () => {
    const cell = new Cell(5, 5);

    cell.setCell(5, 5, 2);
    cell.setCell(5, 5, 2);

    expect(cell.draftValues.has(2)).toBeFalsy();
  });

  it("Should add a second value to the draft values", () => {
    const cell = new Cell(5, 5);

    cell.setCell(5, 5, 2);
    cell.setCell(5, 5, 3);

    expect(cell.draftValues.has(2)).toBeTruthy();
    expect(cell.draftValues.has(3)).toBeTruthy();
  });

  it("Should be able to set the value", () => {
    const cell = new Cell(5, 5);

    cell.changeCellState(CellState.DEFINITIVE);

    cell.setCell(5, 5, 2);

    expect(cell.value).toBe(2);
  });

  it("Should not change the value if the cell is not the correct x and y", () => {
    const cell = new Cell(5, 5);

    cell.changeCellState(CellState.DEFINITIVE);

    cell.setCell(5, 7, 2);

    expect(cell.value).toBe(0);
  });

  it("Should not return the cell if it is not the correct x and y", () => {
    const cell = new Cell(5, 5);

    cell.changeCellState(CellState.DEFINITIVE);

    const getCell = cell.getCell(5, 7);

    expect(getCell).toBeUndefined();
  });

  it("Should return the cell", () => {
    const cell = new Cell(5, 5);

    cell.changeCellState(CellState.DEFINITIVE);

    const getCell = cell.getCell(5, 5);

    expect(getCell).toBe(cell);
  });

  it("Should return the the right value depending on state, expect definitive", () => {
    const cell = new Cell(5, 5, 3);

    cell.changeCellState(CellState.DEFINITIVE);

    expect(cell.getValues()).toBe(3);
  });

  it("Should return the the right value depending on state, expect draft", () => {
    const cell = new Cell(5, 5);

    cell.setCell(5, 5, 6);

    const set = new Set<number>();
    set.add(6);

    expect(cell.getValues()).toStrictEqual(set);
  });

  it("Should not set a draft number if the definitive number is set", () => {
    const cell = new Cell(5, 5, 3);

    cell.setCell(5, 5, 6);

    const set = new Set<number>();

    expect(cell.getValues()).toStrictEqual(set);
  });

  it("Should remove a value", () => {
    const cell = new Cell(5, 5);

    cell.changeCellState(CellState.DEFINITIVE);

    cell.setCell(5, 5, 2);
    cell.setCell(5, 5, 2);

    expect(cell.value).toBe(0);
  });

  it("Should change state to draft", () => {
    const cell = new Cell(5, 5);

    cell.changeCellState(CellState.DRAFT);

    cell.setCell(5, 5, 3);

    expect(cell.draftValues.has(3)).toBeTruthy();
  });
});