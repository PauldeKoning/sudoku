import PuzzleUtil from '../src/util/puzzle.parse.util';

describe('Parse 4x4 puzzles', () => {
  it('Should parse a 4x4 puzzle, has 4 boxes', () => {
    const puzzleString = '0340400210030210';

    const result = PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2);

    expect(result.children.length).toBe(4);
  });

  it('Should parse a 4x4 puzzle, has correct positions', () => {
    const puzzleString = '0340400210030210';

    const result = PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2);

    expect(result.getCell(1, 0)).toBe(3);
    expect(result.getCell(2, 0)).toBe(4);
    expect(result.getCell(0, 1)).toBe(4);
    expect(result.getCell(3, 1)).toBe(2);
    expect(result.getCell(0, 2)).toBe(1);
    expect(result.getCell(3, 2)).toBe(3);
    expect(result.getCell(1, 3)).toBe(2);
    expect(result.getCell(2, 3)).toBe(1);
  });

  it('Should fail when parsing an incorrect 4x4 string', () => {
    const puzzleString = '0340400210030210232';

    expect(() => PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2)).toThrowError();
  });

  it('Should fail when parsing with incorrect 4x4 parameters', () => {
    const puzzleString = '0340400210030210';

    expect(() => PuzzleUtil.parseLinearPuzzle(puzzleString, 6, 3)).toThrowError();
  });
});

describe('Parse 6x6 puzzles', () => {
  it('Should parse a 6x6 puzzle, has 6 boxes', () => {
    const puzzleString = '640200051000364002500436000640006025';

    const result = PuzzleUtil.parseLinearPuzzle(puzzleString, 6, 2);

    expect(result.children.length).toBe(6);
  });

  it('Should parse a 6x6 puzzle, has correct positions', () => {
    const puzzleString = '640200051000364002500436000640006025';

    const result = PuzzleUtil.parseLinearPuzzle(puzzleString, 6, 2);

    expect(result.getCell(0, 0)).toBe(6);
    expect(result.getCell(1, 0)).toBe(4);
    expect(result.getCell(3, 0)).toBe(2);
    expect(result.getCell(1, 1)).toBe(5);
    expect(result.getCell(2, 1)).toBe(1);
    expect(result.getCell(0, 2)).toBe(3);
    expect(result.getCell(1, 2)).toBe(6);
    expect(result.getCell(2, 2)).toBe(4);
    expect(result.getCell(5, 2)).toBe(2);
    expect(result.getCell(0, 3)).toBe(5);
    expect(result.getCell(3, 3)).toBe(4);
    expect(result.getCell(4, 3)).toBe(3);
    expect(result.getCell(5, 3)).toBe(6);
    expect(result.getCell(3, 4)).toBe(6);
    expect(result.getCell(4, 4)).toBe(4);
    expect(result.getCell(2, 5)).toBe(6);
    expect(result.getCell(4, 5)).toBe(2);
    expect(result.getCell(5, 5)).toBe(5);
  });

  it('Should fail when parsing an incorrect 6x6 string', () => {
    const puzzleString = '64020005100036400250043600064000602552335';

    expect(() => PuzzleUtil.parseLinearPuzzle(puzzleString, 6, 2)).toThrowError();
  });

  it('Should fail when parsing with incorrect 6x6 parameters', () => {
    const puzzleString = '640200051000364002500436000640006025';

    expect(() => PuzzleUtil.parseLinearPuzzle(puzzleString, 5, 1)).toThrowError();
  });
});

describe('Parse general puzzles', () => {
  it('Should parse a puzzle with an offset, has correct positions', () => {
    const puzzleString = '0340400210030210';

    const result = PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2, 2, 2);

    expect(result.getCell(3, 2)).toBe(3);
    expect(result.getCell(4, 2)).toBe(4);
    expect(result.getCell(2, 3)).toBe(4);
    expect(result.getCell(5, 3)).toBe(2);
    expect(result.getCell(2, 4)).toBe(1);
    expect(result.getCell(5, 4)).toBe(3);
    expect(result.getCell(3, 5)).toBe(2);
    expect(result.getCell(4, 5)).toBe(1);
  });
});

// TODO: check if correctly parsing 9x9

describe('Parse jigsaw puzzle', () => {
  it('Should parse a jigsaw puzzle, has 9 boxes', () => {
    const jigsawString =
      'SumoCueV1=0J0=6J1=0J1=0J1=0J1=0J2=0J3=7J3=0J3 =2J0=4J0=0J1=0J1=0J1=7J2=0J2=5J3=8J3=0J0=0J0=0J0=0J1=0J1=0J2=0J3=0J3=0J3=0J0=8J4=0J0=6J0=5J2=3J2=0J2=0J5=0J3=0J4=0J4=0J4=3J6=0J6=9J2=0J2=0J5=0J5=0J4=0J4=0J4=2J6=7J6=8J7=0J7=3J7=0J5=0J4=0J4=0J8=0J6=0J6=0J7=0J7=0J7=0J5=9J8=2J8=0J8=1J8=0J6=0J6=0J7=6J5=3J5=0J8=5J8=0J8=0J8=0J6=0J7=0J7=8J5=0J5';

    const result = PuzzleUtil.parseJigsawPuzzle(jigsawString);

    expect(result.children.length).toBe(9);
  });

  // TODO: Check if correctly parsed

  it('Should fail when parsing an incorrect jigsaw string', () => {
    const jigsawString =
      'SumoCueV1=0=J0=6J1=0J1=0J1=0J1=0J2=40J3=7J3=0J3=2J0=4J0=0J1=0J1=0J1=7J2=0J2=5J3=8J3=0J0=0J0=0J0=0J1=0J1=0J2=0J3=0J3=0J3=0J0=8J4=0J0=6J0=5J2=3J2=0J2=0J5=0J3=0J4=0J4=0J4=3J6=0J6=9J2=0J2=0J5=0J5=0J4=0J4=0J4=2J6=7J6=8J7=0J7=3J7=0J5=0J4=0J4=0J8=0J6=0J6=0J7=0J7=0J7=0J5=9J8=2J8=0J8=1J8=0J6=0J6=0J7=6J5=3J5=0J8=5J8=0J8=0J8=0J6=0J7=0J7=8J5=0J5';

    expect(() => PuzzleUtil.parseJigsawPuzzle(jigsawString)).toThrowError();
  });
});
