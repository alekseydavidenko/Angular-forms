import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProductHostComponent } from "./product-host/product-host.component";
import { PriductListComponenent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductAddComponent } from './product-add/product-add.component';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ProductRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProductHostComponent,
        PriductListComponenent,
        ProductDetailsComponent,
        ProductAddComponent
    ]
}) export class ProductModule {
    
}