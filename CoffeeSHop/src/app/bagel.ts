export class Bagel {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public readonly creamCheesePrice = 0.50;
  public readonly grapeJellyPrice = 0.75;
  public readonly appleJellyPrice = 0.75;
  public readonly butterPrice = 0.50;

  name: string;
  creamCheese = false;
  grapeJelly = false;
  appleJelly = false;
  butter = false;
  price: number;

  getTotalPrice(): number {
    let totalPrice = this.price;
    if (this.creamCheese) {
      totalPrice += this.creamCheesePrice;
    }
    if (this.grapeJelly) {
      totalPrice += this.grapeJellyPrice;
    }
    if (this.appleJelly) {
      totalPrice += this.appleJellyPrice;
    }
    if (this.butter) {
      totalPrice += this.butterPrice;
    }
    return totalPrice;
  }
}
