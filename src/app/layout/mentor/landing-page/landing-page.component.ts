import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { DialogAddSkillComponent } from '../dialog-add-skill/dialog-add-skill.component';
import { SearchResult } from 'src/app/models/search-result.model';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';
import { ConstantsService } from 'src/app/services/constants.service';
import { UserService } from 'src/app/services/user.service';
import { MentorSkill } from 'src/app/models/mentor-skill.model';
import { forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { TrainingsService } from 'src/app/services/trainings.service';
import { Training } from 'src/app/models/training.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  trainingsColumns: string[] = ['skill', 'mentor', 'status', 'startDate', 'endDate','action'];
  trainingsDataSource:SearchResult[];
  currentDataSource:SearchResult[];
  completedDataSource:SearchResult[];

  mySkillColumns: string[] = ['id', 'skill', 'toc', 'price', 'selfRating','action'];
  mySkillDataSource:MentorSkill[];

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
  constructor(public dialog: MatDialog,
    private authService:AuthService,
    private searchService:SearchService,
    public constantsService: ConstantsService,
    private userService: UserService,
    private trainingsService: TrainingsService,
    private toastr: ToastrService) { 
    const currentUser = this.authService.currentUserValue;

    forkJoin([searchService.getMentorTrainings(currentUser.username),userService.findByUsername(currentUser.username)
    ]).subscribe(([trainings,user]) =>{
      this.trainingsDataSource = trainings;
      this.currentDataSource = trainings.filter(t=>t.status!==constantsService.TRAINING_STATUS.Delete);
      this.completedDataSource = trainings.filter(t=>t.status===constantsService.TRAINING_STATUS.Completed);
      this.mySkillDataSource = user.mentorSkills;
    },error=>{
     console.error(error);
    })
  }

  ngOnInit() {
  }

  addSkill(): void {
    const dialogRef = this.dialog.open(DialogAddSkillComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {console.log(result);
      if(result.event == 'done'){
        
        const currentUser = this.authService.currentUserValue;
         let ms:MentorSkill = {
          selfRating: result.data.selfRating,
          yearsOfExp: result.data.yearsOfExp,
          price: result.data.price,
          remarks: result.data.yearsOfExp,
          status: this.constantsService.MENTOR_SKILL_STATUS.Active,
          createDate: new Date(),
          mentor: currentUser,
          skill: {id:result.data.skillId}
        };
        this.userService.saveMentorSkill(ms).subscribe(data=>{
          this.toastr.success('success!', 'Add Skill');
          this.mySkillDataSource.push();
          this.table.renderRows();
        })
      }
    });
  }
  doAction(traing,status){
    console.log(traing);
    let t: Training = {
      id:traing.trainingId,
      startDate:new Date(),
      status: status
    }
    this.trainingsService.updateTraining(traing.trainingId,t).subscribe(date=>{
      this.toastr.success('success!', 'Approved');
      traing.startDate = t.startDate;
      traing.status = t.status;
    })
  }
  
}
