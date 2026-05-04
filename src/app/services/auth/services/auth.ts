import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.get<User[]>(
      `${this.baseUrl}?email=${email}&password=${password}`
    );
  }

  register(user: User) {
    return this.http.post<User>(this.baseUrl, user);
  }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', '123');
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getUserById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

}
