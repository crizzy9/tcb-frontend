import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class PlaygroundService {

    constructor(private http: HttpClient) {}

    // TODO: make it so that routes are appended to the base url
    // Uses http.get() to load data from a single API endpoint
    getFoods() {
        return this.http.get('http://localhost:3000/playground/api/food');
    }

    postFoods(name: string) {
        return this.http.post('http://localhost:3000/playground/api/food', {'name': name});
    }
}
