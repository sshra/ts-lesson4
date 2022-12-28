import { DiscontSelling, DiscontSellingAdvance, Selling } from "./classes/DiscountSelling";
import { Product } from "./classes/Product";
import { rand } from "./utils/rand";

// products
const productNames: string[] = ['Apples', 'Bananas', 'Plums', 'Cucumbars', 'Watermelons'];
const products: Product[] = productNames.map(
  name => new Product(name, rand(15, 40))
);
const randomProduct = (): Product => {
  return products[rand(0, products.length - 1)];
}

// sellings
const discontSellings: DiscontSelling[] = [];
const discontSellingAdvance: DiscontSellingAdvance[] = [];

const amount: number = 4;
let counter: number = amount;
while (counter--) {
  discontSellings.push(
    new DiscontSelling(randomProduct(), rand(1, 10))
  );
}
discontSellings.sort((a, b) => b.compare(a));

counter = amount;
while (counter--) {
  discontSellingAdvance.push(
    new DiscontSellingAdvance(
      randomProduct(),
      rand(1, 10),
      rand(5, 15),
    )
  );
}
discontSellingAdvance.sort((a, b) => b.compare(a));

// output
console.log(discontSellings);
console.log(discontSellingAdvance);

const allSellings: Selling[] = [...discontSellings, ...discontSellingAdvance];
allSellings.map(selling => console.log( selling.getPriceVerbose()));


