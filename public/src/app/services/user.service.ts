import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin, User } from 'src/assets/models';
import { USER_LOGIN_URL } from '../common/constants/urls';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUser());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUser(user);
          this.userSubject.next(user);
        },
        error: (errResponse) => {
          console.error(errResponse.error);
        }
      })
    )
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUser(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUser(): User {
    const userJSON = localStorage.getItem(USER_KEY);

    if (userJSON) return JSON.parse(userJSON) as User;

    return new User();
  }
}
