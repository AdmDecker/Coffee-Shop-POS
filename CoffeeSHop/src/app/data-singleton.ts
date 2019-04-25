import {Bagel} from './bagel';

export class DataSingleton {
  public static cart = new Array<Bagel>();
  public static selectedBagel: Bagel;
}
