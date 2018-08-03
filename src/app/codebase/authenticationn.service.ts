import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { config } from './../config';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthenticationService {

    // config.API_BASE_URL
    baseUrl = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) {}

    postRegister(name: string, email: string, password: string) {
        return this.http.post(this.baseUrl + 'users/register', {
            'name': name,
            'email': email,
            'password': password
        });
    }

    postLogin(email: string, password: string) {
        return this.http.post(this.baseUrl + 'users/login', {
            'email': email,
            'password': password
        });
    }

}
