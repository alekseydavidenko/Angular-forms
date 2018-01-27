"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var product_host_component_1 = require("./product-host/product-host.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_details_component_1 = require("./product-details/product-details.component");
var product_add_component_1 = require("./product-add/product-add.component");
var product_routing_module_1 = require("./product-routing.module");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                product_routing_module_1.ProductRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                product_host_component_1.ProductHostComponent,
                product_list_component_1.PriductListComponenent,
                product_details_component_1.ProductDetailsComponent,
                product_add_component_1.ProductAddComponent
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map