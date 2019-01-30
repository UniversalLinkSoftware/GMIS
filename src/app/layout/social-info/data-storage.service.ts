import { Social } from './social-info.model';
import {SocialInfoComponent} from './social-info.component';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map} from 'rxjs/operators';
import 'rxjs';
import { SocialService } from './social.service';





 @Injectable()
export class DataStorageService {
  constructor(private http: Http, private socialService: SocialService) {}

  storeSocial() {
       return this.http.put('https://shopping-ang7.firebaseio.com/social.json', this.socialService.getSocialInfo());
  }

  // getSocial() {
  //   this.http.get('https://shopping-ang7.firebaseio.com/products.json').pipe(
  //     map(
  //       (response: Response) => {
  //         const products: Product[] = response.json();
  //         // tslint:disable-next-line:prefer-const
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
