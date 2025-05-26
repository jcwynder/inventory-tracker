"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByPrice = sortByPrice;
exports.sortByName = sortByName;
function sortByPrice(products, ascending = true) {
    return products.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}
function sortByName(products) {
    return products.sort((a, b) => a.name.localeCompare(b.name));
}
