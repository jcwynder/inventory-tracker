"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    get getFormattedFileSize() {
        return `${this.fileSize} MB`;
    }
    getPriceWithTax() {
        return this.price;
    }
}
exports.DigitalProduct = DigitalProduct;
