import { NgModule } from '@angular/core';
import { ManageScheduleDataSource } from './data/datasources/manage-schedule.datasource';
import { MockManageScheduleDataSource } from './data/datasources/manage-schedule.mock.datasource';
import { ManageScheduleRepositoryImpl } from './data/repositories/manage-schedule.repository';
import { ManageScheduleRepository } from './domain/repositories/manage-schedule.repository';
import { LoadContentsUseCase } from './domain/usecases/load-contents.usecase';
import { LoadProgramsUseCase } from './domain/usecases/load-programs.usecase';
import { LoadWorkoutsUseCase } from './domain/usecases/load-workouts.usecase';


@NgModule({
  providers: [
    {
      provide: ManageScheduleDataSource,
      useFactory: () => {
        return new MockManageScheduleDataSource();
      },
    },
    {
      provide: ManageScheduleRepository,
      useClass: ManageScheduleRepositoryImpl,
    },
    LoadWorkoutsUseCase,
    LoadProgramsUseCase,
    LoadContentsUseCase,
  ],
})
export class ManageScheduleFeatureModule {}
