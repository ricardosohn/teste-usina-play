import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ManageScheduleStateModel } from '../state/manage-schedule.state.model';
import { ManageScheduleStateSelectors } from '../state/manage-schedule.state.selector';

@Component({
  templateUrl: 'manage-schedule.page.html',
  styleUrls: ['manage-schedule.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageSchedulePage {
  @Select(ManageScheduleStateSelectors.stateModel)
  stateModel$!: Observable<ManageScheduleStateModel>;

  constructor() {}
}
