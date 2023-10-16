import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePanelServiceService {

  constructor(private _hclient:HttpClient) { }
 

  GetTotalPrice( userToken: string): Observable<any> {
    const newToken = localStorage.getItem('userToken')
   
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    })

    return this._hclient.get<any>('http://localhost:8000/api/v1/order/totalPrices', { headers: headers });
  }

}
