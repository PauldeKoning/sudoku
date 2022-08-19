export default interface ICell {
  x: number;
  y: number;
  value: number;
  draftValues: Set<number>;
  boxNr: number;
}