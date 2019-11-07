import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MentorSkill } from '../models/mentor-skill.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_PATH = '/api/user';

  constructor(private http: HttpClient) { }

  //can get mentor's skill, if has MENTOR role
  findByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}${this.USER_PATH}/${username}`);
  }

  saveMentorSkill(mentorSkill:MentorSkill): Observable<MentorSkill>{
    return this.http.post<MentorSkill>(`${environment.apiUrl}${this.USER_PATH}/mentorSkill`,mentorSkill);
  }
  
}
