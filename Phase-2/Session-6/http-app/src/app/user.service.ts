import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url="https://jsonplaceholder.typicode.com/users";

  getAllUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.url);
  }
}
