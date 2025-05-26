"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalcuator_1 = require("./utils/taxCalcuator");
const productSorter_1 = require("./utils/productSorter");
const products = [
    new PhysicalProduct_1.PhysicalProduct("PH001", "Wireless Mouse", 29.99, 0.3),
    new PhysicalProduct_1.PhysicalProduct("PH002", "Wireless Keyboard", 199.99, 15),
    new DigitalProduct_1.DigitalProduct("DG001", "E-book", 9.99, 5),
];
for (const product of products) {
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        product.applyBulkDiscount(12);
    }
}
const sortedProducts = (0, productSorter_1.sortByPrice)(products);
for (const product of sortedProducts) {
    console.log(product.displayDetails());
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        console.log(`Weight: ${product.getFormattedWeight}`);
    }
    if (product instanceof DigitalProduct_1.DigitalProduct) {
        console.log(`File Size: ${product.getFormattedFileSize}`);
    }
    const finalPrice = (0, taxCalcuator_1.calculateTax)(product);
    console.log(`Final Price (with tax): $${finalPrice.toFixed(2)}\n`);
}
