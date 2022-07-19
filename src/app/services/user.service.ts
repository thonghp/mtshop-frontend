import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/mtshop/users';

  constructor(private httpClient: HttpClient) {}

  // return observable map json data from spring data rest to User array
  getUserList(): Observable<User[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.users)
    );
  }
}

// _embedded bọc json data rest khi chạy local host 8080
interface GetResponse {
  _embedded: {
    users: User[];
  }
}
