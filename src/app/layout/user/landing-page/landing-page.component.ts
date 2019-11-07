import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogProposeComponent } from '../dialog-propose/dialog-propose.component';
import { DialogMentorDetailComponent } from '../dialog-mentor-detail/dialog-mentor-detail.component';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, forkJoin, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { SearchService } from 'src/app/services/search.service';
import { SearchResult } from 'src/app/models/search-result.model';
import { MentorSkill } from 'src/app/models/mentor-skill.model';
import { Skill } from 'src/app/models/skill.model';
import { ToastrService } from 'ngx-toastr';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Training } from 'src/app/models/training.model';
import { ConstantsService } from 'src/app/services/constants.service';

const ELEMENT_DATA = [
  { id: 1, firstName: "Ebeneser", lastName: "Roll", email: "eroll0@dailymail.co.uk", gender: "Male", age: "23" },
  { id: 2, firstName: "Leanor", lastName: "Osbidston", email: "losbidston1@sitemeter.com", gender: "Female", age: "21" },
  { id: 3, firstName: "Falkner", lastName: "Rowan", email: "frowan2@acquirethisname.com", gender: "Male", age: "35" },
  { id: 4, firstName: "Suzy", lastName: "Suzy", email: "sfiltness3@slate.com", gender: "Female", age: "18" },
  { id: 5, firstName: "Maxi", lastName: "Devoy", email: "mdevoy4@mail.ru", gender: "Female", age: "25" },
  { id: 6, firstName: "Benetta", lastName: "Tuma", email: "btuma5@wikia.com", gender: "Female", age: "47" },
  { id: 7, firstName: "Emanuele", lastName: "Yurkov", email: "eyurkov6@tinypic.com", gender: "Male", age: "39" },
  { id: 8, firstName: "Vannie", lastName: "Pena", email: "vpena7@skype.com", gender: "Female", age: "19" },
  { id: 9, firstName: "Cristina", lastName: "O' Mulderrig", email: "comulderrig8@yahoo.co.jp", gender: "Female", age: "22" },
  { id: 10, firstName: "Bartholemy", lastName: "Kubis", email: "bkubis9@nps.gov", gender: "Male", age: "26" }
];

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  searchSkillValue = new FormControl();
  skillDropdown: Skill[];

  mentorSkillsColumns: string[] = ['skill', 'mentor', 'status', 'price', 'selfRating','action'];
  mentorSkillsDataSource:MentorSkill[];

  trainingsColumns: string[] = ['skill', 'mentor', 'status', 'startDate', 'endDate','action'];
  trainingsDataSource:SearchResult[];
  currentDataSource:SearchResult[];
  completedDataSource:SearchResult[];

  trainings$:Observable<SearchResult[]>;

  constructor(public dialog: MatDialog,
    private authService:AuthService,
    public searchService:SearchService,
    private trainingsService: TrainingsService,
    private constantsService: ConstantsService,
    private toastr: ToastrService) { 
    const currentUser = this.authService.currentUserValue;
    this.trainings$ = currentUser ? searchService.getUserTrainings(currentUser.username) :of([]);
    forkJoin([searchService.getOpenTrains(),this.trainings$
    ]).subscribe(([mentorSkill,trainings]) =>{
      this.mentorSkillsDataSource = mentorSkill;
      this.trainingsDataSource = trainings;
      this.currentDataSource = trainings.filter(t=>t.status!==constantsService.TRAINING_STATUS.Delete || t.status!==constantsService.TRAINING_STATUS.Inactive || t.status!==constantsService.TRAINING_STATUS.Completed);
      this.completedDataSource = trainings.filter(t=>t.status===constantsService.TRAINING_STATUS.Completed);
    })
  }

  ngOnInit() {
    console.log("user LandingPageComponent");
    
  }
  openProposeDialog(obj): void {
    const dialogRef = this.dialog.open(DialogProposeComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {console.log(result);
      if(result.event == 'Propose'){
        const currentUser = this.authService.currentUserValue;
        let t:Training = {user:currentUser,mentor:result.data.mentor,skill:result.data.skill,status:this.constantsService.TRAINING_STATUS.Proposed,createDate: new Date()};
        this.trainingsService.saveTraining(t).subscribe(training=>{
          this.toastr.success('success!', 'Propose');
          this.currentDataSource.push({
            trainingId:training.id,
	          status: t.status,
            createDate: t.createDate,
            skillName: t.skill.name,
            mentorUsername: t.mentor.username,
            mentorFirstName: t.mentor.firstName,
            mentorLastName: t.mentor.lastName
          });
        })
        this.mentorSkillsDataSource = this.mentorSkillsDataSource.filter(value=>value.id != result.id);
        
      }
    });
  }
  openMentorDetailsDialog(obj): void {
    const dialogRef = this.dialog.open(DialogMentorDetailComponent, {
      width: '700px',
      data: obj
    });
  }
}
