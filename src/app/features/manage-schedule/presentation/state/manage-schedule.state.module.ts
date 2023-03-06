import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ManageScheduleFeatureModule } from '../../manage-schedule.feature.module';
import { ManageScheduleState } from './manage-schedule.state';

@NgModule({
  imports: [NgxsModule.forFeature([ManageScheduleState]), ManageScheduleFeatureModule],
})
export class ManageScheduleStateModule {}
