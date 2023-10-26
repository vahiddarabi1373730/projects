import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmailInterface, SignUpInterface } from './model';

@Injectable({
  providedIn: 'root',
})
export class AllServicesService {
  public selectedRows$: BehaviorSubject<EmailInterface> = new BehaviorSubject<EmailInterface>(null);
  public selectedRows$$: Observable<EmailInterface> = this.selectedRows$.asObservable()
  public isLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public isLogin$$: Observable<boolean> = this.isLogin$.asObservable();
  private baseUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  public checkUserName(username: string) {
    return this.http.post(this.baseUrl + '/auth/username', { username });
  }

  public setLogin(isLogin: boolean) {
    this.isLogin$.next(isLogin);
  }

  public checkLogin() {
    return this.http.get(this.baseUrl + '/auth/signedin');
  }
  public signup(model: SignUpInterface) {
    return this.http.post(this.baseUrl + '/auth/signup', model);
  }
  public signIn(model: SignUpInterface) {
    return this.http.post(this.baseUrl + '/auth/signIn', model);
  }
  public signOut() {
    return this.http.post(this.baseUrl + '/auth/signOut', {});
  }
  public getEmails(): Observable<EmailInterface[]> {
    return this.http.get<EmailInterface[]>(this.baseUrl + "/emails")
  }
}
