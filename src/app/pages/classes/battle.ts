import { AlgoList } from './algo-list';

export class Battle{
  constructor(
    public id: number,
    public name: string,
    public level: number,
    public createdBy: string,
    public lastEditBy: string,
    public launchDate: Date,
    public algoNumber: number,
    public givenTime: number,
    public algoList?: AlgoList,
  ) {}
}
