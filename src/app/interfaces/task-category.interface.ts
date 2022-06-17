import {Itask} from "./task.interface";

export interface Icategory{
  name: string;
}

export interface IData{
  categories: Icategory[];
  tasks: Itask[];
}

export interface IDataJSON {
  status: number;
  message: string;
  data: IData;
}
 
