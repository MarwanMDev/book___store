import { BookIF } from './../interface/book-if';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddNewBookService {

  constructor(private _hclient: HttpClient) { }

  Upload_image(image_data: any, userToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + userToken);

    return this._hclient.post<any>('http://localhost:8000/api/v1/bookimageupload/bookImage', image_data, { headers });
  }

  Upload_pfd(pdf_data: any, userToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + userToken);

    return this._hclient.post<any>('http://localhost:8000/api/v1/upload/pdf', pdf_data, { headers });
  }


  Add_book(book_data: object, userToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + userToken);

    return this._hclient.post('http://localhost:8000/api/v1/books', book_data, { headers });
  }

  get_book():Observable<any>{
    return this._hclient.get('http://localhost:8000/api/v1/books')
  }

  delete_book(iid:string , userToken:string):Observable<any>{
   
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userToken}`,
    })

    return this._hclient.delete('http://localhost:8000/api/v1/books/'+iid ,{ headers: headers } )
    
  }

  Update_book(book : BookIF):Observable<any>{
    return this._hclient.put('http://localhost:8000/api/v1/books/'+book._id , book)
  }
}
