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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var product_1 = require("../../shared/product");
var product_service_1 = require("../../shared/product.service");
var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(productService, router, fb) {
        this.productService = productService;
        this.router = router;
        this.fb = fb;
        this.categorys = ["category 1", "category 2", "category 3"];
        this.product = new product_1.Product(null, null, null, null);
        this.formErrors = {
            "name": "",
            "price": ""
        };
        this.validationMessages = {
            "name": {
                "required": "Обязательное поле.",
                "minlength": "Значение должно быть не менее 4х символов."
            },
            "price": {
                "required": "Обязательное поле."
            }
        };
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    ProductAddComponent.prototype.buildForm = function () {
        var _this = this;
        this.addForm = this.fb.group({
            "category": [this.product.category, [
                    forms_1.Validators.required
                ]],
            "name": [this.product.name, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4)
                ]],
            "price": [this.product.price, [
                    forms_1.Validators.required
                ]]
        });
        this.addForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ProductAddComponent.prototype.onValueChanged = function (data) {
        if (!this.addForm)
            return;
        var form = this.addForm;
        for (var item in this.formErrors) {
            this.formErrors[item] = "";
            var control = form.get(item);
            if (control && control.dirty && !control.valid) {
                var message = this.validationMessages[item];
                for (var key in control.errors) {
                    this.formErrors[item] += message[key] + " ";
                }
            }
        }
    };
    ProductAddComponent.prototype.add = function () {
        this.productService.addItem(this.addForm.value);
        this.router.navigate(["products"]);
    };
    ProductAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "product-add",
            templateUrl: "product-add.component.html",
            styleUrls: ["product-add.component.css"]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router,
            forms_1.FormBuilder])
    ], ProductAddComponent);
    return ProductAddComponent;
}());
exports.ProductAddComponent = ProductAddComponent;
//# sourceMappingURL=product-add.component.js.map