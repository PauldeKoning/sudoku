import PuzzleUtil from '../../src/util/puzzle.parse.util';

describe('Parse 4x4 puzzles', () => {
  it('Should parse a 4x4 puzzle, has correct positions', () => {
    const puzzleString = '0340400210030210';

    const result = PuzzleUtil.parseLinearPuzzle(puzzleString, 4, 2);

    expect(result.getCell(1, 0)!.value).toBe(3);
    expect(result.getCell(2, 0)!.value).toBe(4);
    expect(result.getCell(0, 1)!.value).toBe(4);
    expect(result.getCell(3, 1)!.value).toBe(2);
    expect(result.getCell(0, 2)!.value).toBe(1);
    expect(result.getCell(3, 2)!.value).toBe(3);
    expect(result.getCell(1, 3)!.value).toBe(2);
    expect(result.getCell(2, 3)!.value).toBe(1);
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
  it('Should parse a 6x6 puzzle, has correct positions', () => {
    const puzzleString = '640200051000364002500436000640006025';

    const result = PuzzleUtil.parseLinearPuzzle(puzzleString, 6, 2);

    expect(result.getCell(0, 0)!.value).toBe(6);
    expect(result.getCell(1, 0)!.value).toBe(4);
    expect(result.getCell(3, 0)!.value).toBe(2);
    expect(result.getCell(1, 1)!.value).toBe(5);
    expect(result.getCell(2, 1)!.value).toBe(1);
    expect(result.getCell(0, 2)!.value).toBe(3);
    expect(result.getCell(1, 2)!.value).toBe(6);
    expect(result.getCell(2, 2)!.value).toBe(4);
    expect(result.getCell(5, 2)!.value).toBe(2);
    expect(result.getCell(0, 3)!.value).toBe(5);
    expect(result.getCell(3, 3)!.value).toBe(4);
    expect(result.getCell(4, 3)!.value).toBe(3);
    expect(result.getCell(5, 3)!.value).toBe(6);
    expect(result.getCell(3, 4)!.value).toBe(6);
    expect(result.getCell(4, 4)!.value).toBe(4);
    expect(result.getCell(2, 5)!.value).toBe(6);
    expect(result.getCell(4, 5)!.value).toBe(2);
    expect(result.getCell(5, 5)!.value).toBe(5);
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

    expect(result.getCell(3, 2)!.value).toBe(3);
    expect(result.getCell(4, 2)!.value).toBe(4);
    expect(result.getCell(2, 3)!.value).toBe(4);
    expect(result.getCell(5, 3)!.value).toBe(2);
    expect(result.getCell(2, 4)!.value).toBe(1);
    expect(result.getCell(5, 4)!.value).toBe(3);
    expect(result.getCell(3, 5)!.value).toBe(2);
    expect(result.getCell(4, 5)!.value).toBe(1);
  });
});

// TODO: check if correctly parsing 9x9

describe('Parse jigsaw puzzle', () => {
  // TODO: Check if correctly parsed

  it('Should fail when parsing an incorrect jigsaw string with too many cells', () => {
    const jigsawString =
      'SumoCueV1=0=J0=6J1=0J1=0J1=0J1=0J2=40J3=7J3=0J3=2J0=4J0=0J1=0J1=0J1=7J2=0J2=5J3=8J3=0J0=0J0=0J0=0J1=0J1=0J2=0J3=0J3=0J3=0J0=8J4=0J0=6J0=5J2=3J2=0J2=0J5=0J3=0J4=0J4=0J4=3J6=0J6=9J2=0J2=0J5=0J5=0J4=0J4=0J4=2J6=7J6=8J7=0J7=3J7=0J5=0J4=0J4=0J8=0J6=0J6=0J7=0J7=0J7=0J5=9J8=2J8=0J8=1J8=0J6=0J6=0J7=6J5=3J5=0J8=5J8=0J8=0J8=0J6=0J7=0J7=8J5=0J5';

    expect(() => PuzzleUtil.parseJigsawPuzzle(jigsawString)).toThrowError();
  });

  it('Should fail when parsing an incorrect jigsaw string with an incorrect cell', () => {
    const jigsawString =
      'SumoCueV1=0J0=6J1=0J1=0J1=0J1=0J2=0J3=7J 3=0J3=2J0=4J0=0J1=0J1=0J1=7J2=0J2=5J3=8J3=0J0=0J0=0J0=0J1=0J1=0J2=0J3=0J3=0J3=0J0=8J4=0J0=6J0=5J2=3J2=0J2=0J5=0J3=0J4=0J4=0J4=3J6=0J6=9J2=0J2=0J5=0J5=0J4=0J4=0J4=2J6=7J6=8J7=0J7=3J7=0J5=0J4=0J4=0J8=0J6=0J6=0J7=0J7=0J7=0J5=9J8=2J8=0J8=1J8=0J6=0J6=0J7=6J5=3J5=0J8=5J8=0J8=0J8=0J6=0J7=0J7=8J5=0J5';

    expect(() => PuzzleUtil.parseJigsawPuzzle(jigsawString)).toThrowError();
  });
});
