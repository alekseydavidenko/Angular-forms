"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_1 = require("./product");
var products = [
    new product_1.Product(1, "category 1", "product 1", 100),
    new product_1.Product(2, "category 3", "product 2", 200),
    new product_1.Product(3, "category 2", "product 3", 300),
    new product_1.Product(4, "category 3", "product 4", 400),
    new product_1.Product(5, "category 2", "product 5", 500),
    new product_1.Product(6, "category 1", "product 6", 600),
    new product_1.Product(7, "category 3", "product 7", 700),
    new product_1.Product(8, "category 1", "product 8", 800),
    new product_1.Product(9, "category 2", "product 9", 900),
    new product_1.Product(10, "category 1", "product 10", 1000)
];
var productsPromise = Promise.resolve(products);
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getAll = function () {
        return productsPromise;
    };
    ;
    ProductService.prototype.getProduct = function (id) {
        return productsPromise.then(function (products) { return products.find(function (x) { return x.id == id; }); });
    };
    ;
    ProductService.prototype.getSelect = function () {
        var select = ["All category"];
        productsPromise.then(function (products) { return products.forEach(function (element) {
            if (select.indexOf(element.category) == -1) {
                select.push(element.category);
            }
        }); });
        return select;
    };
    ;
    ProductService.prototype.getChangeSelected = function (category) {
        var selectCategoryProducts = [];
        if (category == "All category") {
            return Promise.resolve(products);
        }
        else {
            productsPromise.then(function (products) { return products.forEach(function (element) {
                if (element.category == category) {
                    selectCategoryProducts.push(element);
                }
            }); });
            return Promise.resolve(selectCategoryProducts);
        }
    };
    ProductService.prototype.removeProduct = function (id) {
        productsPromise.then(function (products) {
            products.forEach(function (item, index) {
                if (item.id == id) {
                    products.splice(index, 1);
                }
            });
        });
    };
    ;
    ProductService.prototype.addItem = function (newItem) {
        newItem.id = this.getId();
        products.push(newItem);
    };
    ProductService.prototype.getId = function () {
        if (products.length == 0)
            return 1;
        else
            return products.length + 1;
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map