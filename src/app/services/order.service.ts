import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // private apiUrl = 'http://localhost:3000/order';
  private apiUrl = 'https://mevamart-server.onrender.com/order';

  constructor(private http:HttpClient) { }


  getAllOrders(){
    return this.http.get(`${this.apiUrl}`);

  }

  updateOrder(updatedOrder: any): Observable<any> {
    const url = `${this.apiUrl}/${updatedOrder._id}`;
    return this.http.put<any>(url, updatedOrder);
  }

  deleteOrder(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete<any>(url);
  }
}
