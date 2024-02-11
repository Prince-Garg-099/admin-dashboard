import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private apiUrl = 'http://localhost:3000/product';
  private apiUrl = 'https://mevamart-server.onrender.com/product';

  constructor(private http:HttpClient) { }


  getAllProducts(){
    return this.http.get(`${this.apiUrl}`);

  }

  updateProduct(updatedProduct: any): Observable<any> {
    const url = `${this.apiUrl}/${updatedProduct._id}`;
    return this.http.put<any>(url, updatedProduct);
  }


  deleteProduct(productId: string): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<any>(url);
  }
}
