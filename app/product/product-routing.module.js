"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_host_component_1 = require("./product-host/product-host.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_details_component_1 = require("./product-details/product-details.component");
var product_add_component_1 = require("./product-add/product-add.component");
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: "",
                        redirectTo: "/products",
                        pathMatch: "full"
                    },
                    {
                        path: "products",
                        component: product_host_component_1.ProductHostComponent,
                        children: [
                            {
                                path: "",
                                component: product_list_component_1.PriductListComponenent,
                                children: [
                                    {
                                        path: "add",
                                        component: product_add_component_1.ProductAddComponent
                                    },
                                    {
                                        path: ":id",
                                        component: product_details_component_1.ProductDetailsComponent
                                    },
                                    {
                                        path: "",
                                        component: product_details_component_1.ProductDetailsComponent
                                    }
                                ]
                            }
                        ]
                    }
                ])
            ],
            exports: [router_1.RouterModule]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());
exports.ProductRoutingModule = ProductRoutingModule;
//# sourceMappingURL=product-routing.module.js.map