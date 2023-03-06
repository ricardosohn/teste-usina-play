import { Selector } from '@ngxs/store';
import { ManageScheduleState } from './manage-schedule.state';
import { ManageScheduleStateModel } from './manage-schedule.state.model';

export abstract class ManageScheduleStateSelectors {
  @Selector([ManageScheduleState])
  static stateModel(stateModel: ManageScheduleStateModel) {
    return stateModel;
  }
}
