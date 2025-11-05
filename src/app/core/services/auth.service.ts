import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(
        private http: HttpClient,
        private cookie: CookieService
    ) { }

    login(data: { email: string; password: string }): Observable<any> {
        return this.http.post('/api/login', data);
    }

    setSession(token: string, email: string) {
        this.cookie.set('token', token);
        this.cookie.set('email', email);
    }

    logout() {
        this.cookie.delete('token');
        this.cookie.delete('email');
    }

    isLoggedIn(): boolean {
        return this.cookie.check('token');
    }

    getUserEmail(): string {
        return this.cookie.get('email');
    }
}
