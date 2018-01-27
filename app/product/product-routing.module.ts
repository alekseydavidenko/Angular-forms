import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductHostComponent } from "./product-host/product-host.component";
import { PriductListComponenent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "",
                redirectTo: "/products",
                pathMatch: "full"
            },
            {
                path: "products",
                component: ProductHostComponent,
                children: [
                    {
                        path: "",
                        component: PriductListComponenent,
                        children: [
                            {
                                path: "add",
                                component: ProductAddComponent
                            },  
                            {   
                                path: ":id",
                                component: ProductDetailsComponent
                            },
                            {
                                path: "",
                                component: ProductDetailsComponent
                            }                                                     
                        ]
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
}) export class ProductRoutingModule {

}