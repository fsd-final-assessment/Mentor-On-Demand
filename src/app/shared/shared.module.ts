import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoaderComponent],
    imports: [AppMaterialModule, FlexLayoutModule, CommonModule,FormsModule,ReactiveFormsModule],
    exports: [AppMaterialModule, FlexLayoutModule, LoaderComponent, CommonModule,FormsModule,ReactiveFormsModule]
})
export class SharedModule {}