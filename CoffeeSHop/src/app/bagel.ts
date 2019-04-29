export class Bagel {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  name: string;
  creamCheese = false;
  grapeJelly = false;
  appleJelly = false;
  butter = false;
  price: number;

  getTotalPrice() {

  }
}
