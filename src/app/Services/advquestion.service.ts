import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvquestionService {
  private qapi2 = '../../assets/questionsadv.json';

  constructor(private httpClient:HttpClient) { 
  }
  getAdQuestion():Observable<any[]>{
    return this.httpClient.get<any[]>(this.qapi2);
  }
  
}
