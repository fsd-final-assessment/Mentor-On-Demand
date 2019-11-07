import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { SearchResult } from '../models/search-result.model';
import { MentorSkill } from '../models/mentor-skill.model';
import { Skill } from '../models/skill.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private allSkills$: BehaviorSubject<Skill[]> =  new BehaviorSubject<Skill[]>([]);

  SEARCH_PATH = '/api/search';

  SKILL_PATH = '/api/skill';

  constructor(private http: HttpClient) { }

  public get allSkills(): Observable<Skill[]> {
    return this.allSkills$.asObservable();
  }

  getUserTrainings(username: string) :Observable<Array<SearchResult>>{
    return this.http.get<Array<SearchResult>>(`${environment.apiUrl}${this.SEARCH_PATH}/u-trainings?username=${username}`);
  }
  
  getMentorTrainings(username: string) :Observable<Array<SearchResult>>{
    return this.http.get<Array<SearchResult>>(`${environment.apiUrl}${this.SEARCH_PATH}/m-trainings?username=${username}`);
  }

  //There is no difference at all. Type[] is the shorthand syntax for an array of Type. Array<Type> is the generic syntax. They are completely equivalent.
  getOpenTrains(skill: string="") :Observable<MentorSkill[]>{
    return this.http.get<MentorSkill[]>(`${environment.apiUrl}${this.SEARCH_PATH}/skills?skill=${skill}`);
  }

  getAllSkills(){
    this.http.get<Skill[]>(`${environment.apiUrl}${this.SKILL_PATH}/list`).pipe(
      map(data=> {
        // this.SKILLS = data;
        this.allSkills$.next(data);
      })
    ).subscribe();
  }

}
