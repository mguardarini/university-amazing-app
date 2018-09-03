import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchoolProgramPage } from './school-program';

@NgModule({
  declarations: [
    SchoolProgramPage,
  ],
  imports: [
    IonicPageModule.forChild(SchoolProgramPage),
  ],
})
export class SchoolProgramPageModule {}
