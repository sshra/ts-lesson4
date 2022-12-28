import { Product } from "./Product"

export abstract class AbstractSelling {
  constructor (
    protected _product: Product,
    protected _amount: number) {}

  set product(product: Product) {
    this._product = product;
  }
  set amount(amount: number) {
    this._amount = amount;
  }
  get product(): Product {
    return this._product;
  }
  get amount(): number {
    return this._amount;
  }

  abstract getPrice(): number;
  abstract getPriceVerbose(): string;

  compare(selling: AbstractSelling) {
    return this._product.price - selling.product.price;
  }

}