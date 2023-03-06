import { Injectable } from '@angular/core';
import { ContentsEntity } from '../../domain/entities/contents.entity';
import { ProgramsEntity } from '../../domain/entities/programs.entity';
import { WorkoutsEntity } from '../../domain/entities/workouts.entity';
import { ManageScheduleDataSource } from './manage-schedule.datasource';

@Injectable()
export class MockManageScheduleDataSource implements ManageScheduleDataSource {
  loadWorkouts(): Promise<WorkoutsEntity> {
    return new Promise((resolve) => setTimeout(() => resolve(new WorkoutsEntity()), 2000));
  }

  loadPrograms(): Promise<ProgramsEntity> {
    return new Promise((resolve) => setTimeout(() => resolve(new ProgramsEntity()), 2000));
  }

  loadContents(): Promise<ContentsEntity> {
    return new Promise((resolve) =>
      setTimeout(() => resolve(new ContentsEntity()), 2000)
    );
  }
}
