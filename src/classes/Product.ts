
export class Product {
  constructor(
    private _name: string,
    private _price: number) {}

  set name(name: string) {
    this._name = name
  }
  get name(): string {
    return this._name;
  }
  set prive(price: number) {
    this._price = price
  }
  get price(): number {
    return this._price;
  }
}
