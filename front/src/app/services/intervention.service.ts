import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(
    private http: HttpClient
  ) { }

  post(route: string, data: any): Observable<any> {
    return this.http.post(env.URL + route, data)
  }

  put(route: string, data: any): Observable<any> {
    return this.http.put(env.URL + route, data)
  }

  get(route: string): Observable<any> {
    return this.http.get(env.URL + route)
  }

  delete(route: string): Observable<any> {
    return this.http.delete(env.URL + route)
  }

}
