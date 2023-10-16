import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddNewEventService {
  patchValue(arg0: { _id: any; name: any; language: any; type: any; image: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private _hclient: HttpClient) { }

  Upload_image(image_data: any, userToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + userToken);

    return this._hclient.post<any>('http://localhost:8000/api/v1/eventimageupload/eventimage', image_data, { headers });
  }

  Add_event(event_data: object, userToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + userToken);

    return this._hclient.post('http://localhost:8000/api/v1/events', event_data, { headers });
  }

  delete_event(iid:string ,userToken:string ):Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + userToken);

    return this._hclient.delete('http://localhost:8000/api/v1/events/'+iid , { headers })
  }

  get_event():Observable<any>{
    return this._hclient.get('http://localhost:8000/api/v1/events')
  }

 

}
