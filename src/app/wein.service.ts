import { Injectable, Inject } from '@angular/core';
import { Wein } from './wein';
import { Observable, of } from 'rxjs';
import { URL_TOKEN } from './weinApi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeinService {
  constructor(@Inject(URL_TOKEN) private url: string, private http: HttpClient) { }

  get(id: number): Observable<any>{
    return this.http.get(this.url+id);
  }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  insert(wein: Wein): Observable<any>{
    return this.http.post(this.url+'insert/', wein);
  }

  update(id: number, wein: Wein): Observable<any>{
    return of();
  }

  delete(id: number):  Observable<any>{
    return of();
  }

  calculateAge(year: number): number{
    return (new Date().getFullYear() - year);
  }
}
