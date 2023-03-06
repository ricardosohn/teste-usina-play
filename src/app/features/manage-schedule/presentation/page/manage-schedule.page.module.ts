import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManageSchedulePage } from './manage-schedule.page';
import { ManageScheduleStateModule } from '../state/manage-schedule.state.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

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
  declarations: [ManageSchedulePage, AppHeaderComponent, UserInfoComponent],
})
export class ManageSchedulePageModule { }
