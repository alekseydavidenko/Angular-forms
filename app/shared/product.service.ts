import { Injectable } from "@angular/core";
import { Product } from './product';
import { forEach } from "@angular/router/src/utils/collection";

let products = [
    new Product(1, "category 1", "product 1", 100),
    new Product(2, "category 3", "product 2", 200),
    new Product(3, "category 2", "product 3", 300),
    new Product(4, "category 3", "product 4", 400),
    new Product(5, "category 2", "product 5", 500),
    new Product(6, "category 1", "product 6", 600),
    new Product(7, "category 3", "product 7", 700),
    new Product(8, "category 1", "product 8", 800),
    new Product(9, "category 2", "product 9", 900),
    new Product(10, "category 1", "product 10", 1000)
];

let productsPromise = Promise.resolve(products);

@Injectable()
export class ProductService {
    getAll(): Promise<Product[]> {
        return productsPromise;
    };
    getProduct(id: number):  Promise<Product> {
        return productsPromise.then(products => products.find(x => x.id == id));
    };   
    getSelect(): string[] {
        let select: string[] = ["All category"];      
        productsPromise.then(products => products.forEach(element => {
            if (select.indexOf(element.category) == -1) {
                select.push(element.category);
            }
        }));
        return select;
    };
    getChangeSelected(category: string): Promise<Product[]> {
        let selectCategoryProducts: Product[] = [];
        if(category == "All category") {
            return Promise.resolve(products);
        }
        else {
            productsPromise.then(products => products.forEach(element => {
                if(element.category == category) {
                    selectCategoryProducts.push(element);
                }
            }));
            return Promise.resolve(selectCategoryProducts);
        }         
    }
    removeProduct(id: number): void{
        productsPromise.then(products => {
            products.forEach((item, index) => {
                if (item.id == id) {
                    products.splice(index, 1);
                }
            });
        });
    };
    addItem(newItem: Product): void{
        newItem.id = this.getId(); 
        products.push(newItem);
    }
    getId(): number{
        if(products.length == 0) return 1;
        else return products.length + 1;
    }
}