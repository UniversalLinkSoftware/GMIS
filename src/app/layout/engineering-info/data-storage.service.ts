
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs';



@Injectable()
export class DataStorageService {
  constructor(private http: Http) {}

  storeProducts() {
    return this.http.put('https://shopping-b94a8.firebaseio.com/',{});
  }

  // getProducts() {
  //   this.http.get('https://shopping-ce6ab.firebaseio.com/product.json').pipe(
  //     map(
  //       (response: Response) => {
  //         const products: Product[] = response.json();
  //         for (let product of products) {
  //           if (!product['info']) {
  //               product['info'] = [];
  //           }
  //         }
  //         return products;
  //       }
  //     ))
  //     .subscribe(
  //       (products: Product[]) => {
  //         this.productService.setProducts(products);
  //       }
  //     );
  // }
}
