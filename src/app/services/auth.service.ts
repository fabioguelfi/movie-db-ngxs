import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, retry, debounceTime } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(protected http: HttpClient) { }

    public authenticationToken(): Observable<any> {
        let headers = new HttpHeaders();

        headers = headers.append('Content-Type', 'application/json');

        let params = new HttpParams();
        params = params.append('api_key', `${environment.api_key}`)

        return this.http.get<any[]>(`${environment.api_url}${environment.api_version}/authentication/token/new`, { params, headers })
            .pipe(
                retry(7),
                debounceTime(500),
                map(response => response),
                catchError(err => of([]))
            )
    }

}
