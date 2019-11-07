import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Training } from '../models/training.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  TRAING_PATH = '/api/training';

  constructor(private http: HttpClient) { }

  saveTraining(training:Training): Observable<any>{
    return this.http.post(`${environment.apiUrl}${this.TRAING_PATH}`,training);
  }

  updateTraining(id:number,training:Training): Observable<Training>{
    return this.http.put<Training>(`${environment.apiUrl}${this.TRAING_PATH}/${id}`,training);
  }
}
