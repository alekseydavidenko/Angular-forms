"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("../../shared/product.service");
var PriductListComponenent = /** @class */ (function () {
    function PriductListComponenent(router, productService) {
        this.router = router;
        this.productService = productService;
    }
    PriductListComponenent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService
            .getAll()
            .then(function (result) { return _this.products = result; });
        this.selectCategory = this.productService.getSelect();
    };
    PriductListComponenent.prototype.onSelect = function (selected) {
        this.router.navigate(["/products", selected.id]);
    };
    PriductListComponenent.prototype.remove = function (id) {
        this.productService.removeProduct(id);
        this.selectCategory = this.productService.getSelect();
    };
    PriductListComponenent.prototype.changeSelect = function () {
        var _this = this;
        this.productService
            .getChangeSelected(this.sortSelectCategory)
            .then(function (result) { return _this.products = result; });
    };
    PriductListComponenent.prototype.addProduct = function () {
        this.router.navigate(["/products", "add"]);
        // this.childAddProduct.add();
        // this.router.navigate(["/products"]);
    };
    PriductListComponenent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "product-list",
            templateUrl: "product-list.component.html",
            styleUrls: ["product-list.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            product_service_1.ProductService])
    ], PriductListComponenent);
    return PriductListComponenent;
}());
exports.PriductListComponenent = PriductListComponenent;
//# sourceMappingURL=product-list.component.js.map