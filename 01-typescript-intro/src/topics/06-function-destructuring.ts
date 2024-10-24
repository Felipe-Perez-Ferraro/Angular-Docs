const phone: Product = {
  description: 'Iphone 15',
  price: 150,
};

const tablet: Product = {
  description: 'Ipad Air',
  price: 250,
};

export const taxCalculator = (options: TaxCalculatorOptions): number[] => {
  let total = 0;
  const { products, tax } = options;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, tax];
};

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, resultTax] = taxCalculator({ products: shoppingCart, tax });

console.log('total: ' + total);
console.log('tax: ' + resultTax);

export interface Product {
  description: string;
  price: number;
}

interface TaxCalculatorOptions {
  tax: number;
  products: Product[];
}
