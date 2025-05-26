import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalcuator";
import { sortByPrice } from "./utils/productSorter";

const products = [
  new PhysicalProduct("PH001", "Wireless Mouse", 29.99, 0.3),
  new PhysicalProduct("PH002", "Wireless Keyboard", 199.99, 15),
  new DigitalProduct("DG001", "E-book", 9.99, 5),
];

for (const product of products) {
  if (product instanceof PhysicalProduct) {
    product.applyBulkDiscount(12);
  }
}

const sortedProducts = sortByPrice(products);

for (const product of sortedProducts) {
  console.log(product.displayDetails());

  if (product instanceof PhysicalProduct) {
    console.log(`Weight: ${product.getFormattedWeight}`);
  }

  if (product instanceof DigitalProduct) {
    console.log(`File Size: ${product.getFormattedFileSize}`);
  }

  const finalPrice = calculateTax(product);
  console.log(`Final Price (with tax): $${finalPrice.toFixed(2)}\n`);
}
