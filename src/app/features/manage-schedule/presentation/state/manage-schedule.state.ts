import { Injectable } from '@angular/core';
import { Action, NgxsAfterBootstrap, State, StateContext } from '@ngxs/store';
import { LoadContentsUseCase } from '../../domain/usecases/load-contents.usecase';
import { LoadProgramsUseCase } from '../../domain/usecases/load-programs.usecase';
import { LoadWorkoutsUseCase } from '../../domain/usecases/load-workouts.usecase';
import {
  LoadWorkoutsAction,
  LoadProgramsAction,
  LoadContentsAction,
} from './manage-schedule.state.action';
import {
  defaultManageScheduleStateModel,
  ManageScheduleStateModel,
} from './manage-schedule.state.model';

@State<ManageScheduleStateModel>({
  name: 'manageScheduleState',
  defaults: defaultManageScheduleStateModel,
})
@Injectable() 
export class ManageScheduleState implements NgxsAfterBootstrap {
  constructor(
    private readonly loadWorkoutsUseCase: LoadWorkoutsUseCase,
    private readonly loadProgramsUseCase: LoadProgramsUseCase,
    private readonly loadContentsUseCase: LoadContentsUseCase
  ) {}

  ngxsAfterBootstrap(ctx: StateContext<ManageScheduleStateModel>) {
    ctx.dispatch([new LoadWorkoutsAction(), new LoadProgramsAction(), new LoadContentsAction()]);
  }

  @Action(LoadWorkoutsAction)
  async loadWorkouts(
    { patchState }: StateContext<ManageScheduleStateModel>,
  ) {
    patchState({ isLoading: true });
    console.log('[ManageScheduleState] calling loadWorkouts');

    const res = await this.loadWorkoutsUseCase.execute();

    if (res instanceof Error) {
      patchState({
        errorMessage: res.message,
        isLoading: false,
        workouts: undefined,
      });
    } else {
      patchState({
        errorMessage: undefined,
        isLoading: false,
        workouts: res,
      });
    }
  }

  @Action(LoadProgramsAction)
  async loadPrograms({ patchState }: StateContext<ManageScheduleStateModel>) {
    patchState({ isLoading: true });
    console.log('[ManageScheduleState] calling loadPrograms');

    const res = await this.loadProgramsUseCase.execute();

    if (res instanceof Error) {
      patchState({
        errorMessage: res.message,
        isLoading: false,
        programs: undefined,
      });
    } else {
      patchState({
        errorMessage: undefined,
        isLoading: false,
        programs: res,
      });
    }
  }

  @Action(LoadContentsAction)
  async loadContents({ patchState }: StateContext<ManageScheduleStateModel>) {
    patchState({ isLoading: true });

    const res = await this.loadContentsUseCase.execute();
    console.log('[ManageScheduleState] calling loadContents');

    if (res instanceof Error) {
      patchState({
        errorMessage: res.message,
        isLoading: false,
        contents: undefined,
      });
    } else {
      patchState({
        errorMessage: undefined,
        isLoading: false,
        contents: res,
      });
    }
  }
}
