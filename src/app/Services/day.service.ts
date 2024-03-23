import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private apiUrl = '../assets/data.json'; 

  constructor(private http: HttpClient) { }

  getDays(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
