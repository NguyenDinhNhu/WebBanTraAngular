import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  // các phương thức khác
  getList(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users')
  }
  getTrash(): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users/GetTrash')
  }
  getUserById(userId): Observable<any> {
    return this.http.get<any>('https://localhost:7015/api/Users/id?id=' + userId)
  }
}