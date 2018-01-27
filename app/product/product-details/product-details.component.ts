import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Product } from "../../shared/product";
import { ProductService } from "../../shared/product.service";

@Component({
    moduleId: module.id,
    selector: "product-details",
    templateUrl: "product-details.component.html",
    styleUrls: ["product-details.component.css"]
}) export class ProductDetailsComponent implements OnInit {

    product: Product;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private productService: ProductService
    ) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"];
            this.productService
                .getProduct(id)
                .then(result => this.product = result);
        });
    }
}