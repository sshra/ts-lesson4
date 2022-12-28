interface Identify {
  readonly id: number;
}

interface Goods {
  readonly title: string;
  count: number;
  price: number;

  logger(str: string): void;
}

class TV implements Goods {
  count: number;
  price: number;

  constructor(readonly title: string, price: number, count: number = 0) {
    this.count = count;
    this.price = price;
  }

  logger(str: string): void {
    console.log(`${str} | ${this.title}`)
  }
}

class WM implements Goods, Identify {
  readonly id: number = +Date.now.toString().substring(9);
  count: number;
  price: number;
  weight: number;

  constructor(
    readonly title: string,
    price: number,
    count: number = 0,
    weight: number
  ) {
    this.count = count;
    this.price = price;
    this.weight = weight;
  }

  logger(str: string): void {
    console.log(`${str} | ${this.title}`)
  }
}