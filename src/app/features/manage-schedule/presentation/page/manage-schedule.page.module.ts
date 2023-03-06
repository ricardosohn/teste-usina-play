import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManageSchedulePage } from './manage-schedule.page';
import { ManageScheduleStateModule } from '../state/manage-schedule.state.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ManageSchedulePage,
      },
    ]),
    ManageScheduleStateModule,
  ],
  declarations: [ManageSchedulePage],
})
export class ManageSchedulePageModule { }
