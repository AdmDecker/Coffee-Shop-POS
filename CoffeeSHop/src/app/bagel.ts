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

  getTotalPrice(): number {
    let totalPrice = this.price;
    if(this.creamCheese){
      totalPrice += .50;
    }
    else if(this.grapeJelly){
      totalPrice += .75;
    }
    else if(this.appleJelly){
      totalPrice += .75;
    }
    else if(this.price){
      totalPrice += .50;
    }
    return totalPrice;
  }
}
