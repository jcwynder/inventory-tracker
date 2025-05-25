export class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  // Returns a formatted string with the product's details
  displayDetails(): string {
    return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(
      2
    )}`;
  }

  getPriceWithTax;
}
