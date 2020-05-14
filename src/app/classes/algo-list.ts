export class Algo {

  constructor(
    public id: number,
    public instruction: string,
    public inputs: any,
    public solution: string,
    public isCompleted = false
  ) {}
}
