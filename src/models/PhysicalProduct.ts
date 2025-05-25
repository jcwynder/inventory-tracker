import { Product } from "./Product";

export class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  getPriceWithTax(): number {
    const taxRate = 0.1;
    return this.price * (1 + taxRate);
  }

  get formattedWeight(): string {
    return `${this.weight.toFixed(2)} kg`;
  }

  displayDetails(): string {
    return `${super.displayDetails}, Weight: ${this.formattedWeight};`;
  }
}
