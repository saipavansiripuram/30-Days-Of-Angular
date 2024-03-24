import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private qapi = '../../assets/questions.json'

  constructor(private httpClient:HttpClient) { }

  getQuestion():Observable<any[]> {
    return this.httpClient.get<any[]>(this.qapi);
  }
}
