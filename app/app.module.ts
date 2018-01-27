import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./product/product.module";
import { AdminComponent } from "./admin/admin.component";

import { ProductService } from "./shared/product.service";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductModule
    ],
    declarations: [
        AppComponent, 
        HomeComponent,        
        AdminComponent
    ],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }