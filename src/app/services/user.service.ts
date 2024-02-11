import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:3000/user';
  private apiUrl = 'https://mevamart-server.onrender.com/user';
 updateUser(updatedUser: any): Observable<any> {
    const url = `${this.apiUrl}/${updatedUser._id}`;
    return this.http.put<any>(url, updatedUser);
  }
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

 

  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}
