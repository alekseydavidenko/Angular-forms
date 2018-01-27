import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";

import { Product } from "../../shared/product";
import { ProductService } from "../../shared/product.service";

@Component({
    moduleId: module.id,
    selector: "product-list",
    templateUrl: "product-list.component.html",
    styleUrls: ["product-list.component.css"]
}) export class PriductListComponenent implements OnInit {
    
    products: Product[];
    selectCategory: string[];
    sortSelectCategory: string;

    constructor(
        private router: Router,
        private productService: ProductService
    ) {}

    ngOnInit(){
        this.productService
            .getAll()
            .then(result => this.products = result); 
        this.selectCategory =  this.productService.getSelect();           
    }

    onSelect(selected: Product){        
        this.router.navigate(["/products", selected.id]);
    }
    remove(id: number){
        this.productService.removeProduct(id);
        this.selectCategory =  this.productService.getSelect();  
    }  
    changeSelect() {
        this.productService
            .getChangeSelected(this.sortSelectCategory)
            .then(result => this.products = result);               
    } 
    addProduct() {
        this.router.navigate(["/products", "add"]);
        // this.childAddProduct.add();
        // this.router.navigate(["/products"]);
    }
}