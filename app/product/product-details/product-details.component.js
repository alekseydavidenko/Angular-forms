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
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, activatedRoute, productService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.forEach(function (params) {
            var id = +params["id"];
            _this.productService
                .getProduct(id)
                .then(function (result) { return _this.product = result; });
        });
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "product-details",
            templateUrl: "product-details.component.html",
            styleUrls: ["product-details.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            product_service_1.ProductService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=product-details.component.js.map