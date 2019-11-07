import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogAddSkillComponent } from './dialog-add-skill/dialog-add-skill.component';


@NgModule({
  declarations: [LandingPageComponent, DialogAddSkillComponent],
  imports: [
    MentorRoutingModule,
    SharedModule
  ],
  entryComponents:[DialogAddSkillComponent]
})
export class MentorModule { }
