import { Algo } from './algo-list';


export class Battle{
  public id: number;
  public createdBy: string;
  public lastEditBy: string;
  public level: number;
  public algoList: Algo[];
  public algoNumber: number;


  constructor(
    public name: string,
    public startingDate: Date,
    public givenTime: number,
  ) {}
}
