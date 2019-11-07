import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogProposeComponent } from './dialog-propose/dialog-propose.component';
import { DialogMentorDetailComponent } from './dialog-mentor-detail/dialog-mentor-detail.component';


@NgModule({
  declarations: [LandingPageComponent, DialogProposeComponent,DialogMentorDetailComponent],
  imports: [
    UserRoutingModule,
    SharedModule
  ],
  entryComponents: [DialogProposeComponent,DialogMentorDetailComponent]
})
export class UserModule { }
