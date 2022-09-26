import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';
import { Observable, tap, catchError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  sendCredentials(email : string, password: string): Observable<any> {

    const body = {
      email,
      password
    }

    
    return this.http.post(`${this.URL}/auth/login`, body)
    //pasar el token con un pipe desde el lado del servicio
    // .pipe(
    //   tap((responseOk: any) => {
    //     const {tokenSession, data} = responseOk
    //     this.cookie.set('token_service', tokenSession,4,'/')
    //   })
    // )
  }
}
