import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router"

import { Product } from '../../shared/product';
import { ProductService } from "../../shared/product.service";

@Component({
    moduleId: module.id,
    selector: "product-add",
    templateUrl: "product-add.component.html",
    styleUrls: ["product-add.component.css"]
}) export class ProductAddComponent implements OnInit {

    categorys: string[] = ["category 1", "category 2", "category 3"];
    product: Product = new Product(null, null, null, null);
    addForm: FormGroup;
    formErrors = {
        "name": "",
        "price": ""
    };
    validationMessages = {
        "name": {
            "required": "Обязательное поле.",
            "minlength": "Значение должно быть не менее 4х символов."
        }, 
        "price": {
            "required": "Обязательное поле."
        }
    };    

    constructor(
        private productService: ProductService,
        private router: Router,
        private fb: FormBuilder
    ){}
    ngOnInit(){
        this.buildForm();
    }

    buildForm(){
        this.addForm = this.fb.group({
            "category": [this.product.category, [
                Validators.required
            ]],
            "name": [this.product.name, [
                Validators.required,
                Validators.minLength(4)
            ]],
            "price": [this.product.price,[
                Validators.required
            ]]
        });

        this.addForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }
    onValueChanged(data?: any) {
        if(!this.addForm) return;
        
        let form = this.addForm;

        for (let item in this.formErrors){
            this.formErrors[item] = "";

            let control = form.get(item);

            if (control && control.dirty && !control.valid) {
                let message = this.validationMessages[item];

                for (let key in control.errors) {
                    this.formErrors[item] += message[key] + " ";
                }
            }
        }
    }
    add() {
        this.productService.addItem(this.addForm.value);
        this.router.navigate(["products"]);
    }
}