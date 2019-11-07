import { NgModule } from '@angular/core';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    SharedModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class RegisterModule { }
