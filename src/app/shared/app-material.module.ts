import { NgModule } from '@angular/core';

// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSidenavModule, MatTableModule, MatToolbarModule, MatCheckboxModule, MatTabsModule, MatMenuModule, MatProgressBarModule, MatSelectModule, MatDialogModule, MatSliderModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDialogModule,
    MatSliderModule
  ],
  exports: [
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDialogModule,
    MatSliderModule
  ]
})
export class AppMaterialModule { }
