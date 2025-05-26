import { Product } from "./Product";
import { DiscountableProduct } from "../interfaces/DiscountableProduct";
export class PhysicalProduct extends Product implements DiscountableProduct {
  constructor(sku: string, name: string, price: number, public weight: number) {
    super(sku, name, price);
  }

  get getFormattedWeight(): string {
    return `${this.weight} kg`;
  }

  override getPriceWithTax(): number {
    return this.price * 1.1;
  }

  applyDiscount(discountPercent: number): void {
    const discountAmount = this.price * (discountPercent / 100);
    this.price -= discountAmount;
  }

  applyBulkDiscount(quantity: number): void {
    if (quantity > 10 || this.weight > 10) {
      this.applyDiscount(15);
    }
  }
}
