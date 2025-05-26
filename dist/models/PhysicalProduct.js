"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    get getFormattedWeight() {
        return `${this.weight} kg`;
    }
    getPriceWithTax() {
        return this.price * 1.1;
    }
    applyDiscount(discountPercent) {
        const discountAmount = this.price * (discountPercent / 100);
        this.price -= discountAmount;
    }
    applyBulkDiscount(quantity) {
        if (quantity > 10 || this.weight > 10) {
            this.applyDiscount(15);
        }
    }
}
exports.PhysicalProduct = PhysicalProduct;
