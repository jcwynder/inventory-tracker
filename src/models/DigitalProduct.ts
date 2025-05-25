import { Product } from "./Product";

export class DigitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  getPriceWithTax(): number {
    return this.price;
  }

  get formattedFileSize() {
    return `${this.fileSize.toFixed(2)} MB`;
  }

  displayDetails(): string {
    return `${super.displayDetails}, File Size: ${this.formattedFileSize}`;
  }
}
