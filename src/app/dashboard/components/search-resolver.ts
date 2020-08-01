import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchResolver implements Resolve<any> {
  constructor(/*protected any: SearchService*/) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any | any {
    const product = route.params.product;
    const resultado = product //his.search.getProductId(product.id);
    console.log('id: ', resultado)
    return resultado;
  }
}
