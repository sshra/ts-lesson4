import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class DiscontSelling extends AbstractSelling {
  static readonly discount = 10;

  getPrice():number {
    const totalPrice: number = (this._product.price - DiscontSelling.discount) * this._amount;
    return totalPrice >= 0 ? totalPrice : 0
  }

  getPriceVerbose(): string {
    return `Discount ${DiscontSelling.discount}$, price: ${this._product.price}, amount ${this._amount}.
      Total: ${this.getPrice().toFixed(2)}`;
  }
}

export class DiscontSellingAdvance extends AbstractSelling {
  static readonly discountPersent = 10;

  constructor (
    protected _product: Product,
    protected _amount: number,
    protected _amountWithDiscount: number) {
    super(_product, _amount)
  }

  getPrice():number {
    let totalPrice = this._product.price * this._amount;
    if (this._amount >= this._amountWithDiscount) {
      totalPrice *= (100 - DiscontSellingAdvance.discountPersent) / 100;
    }
    return totalPrice;
  }

  getPriceVerbose(): string {
    return `Discount % is ${DiscontSellingAdvance.discountPersent},
      price: ${this._product.price}, amount ${this._amount}, amount to overcome ${this._amountWithDiscount}.
      Total: ${this.getPrice().toFixed(2)}`;
  }
}

export type Selling = DiscontSelling | DiscontSellingAdvance;