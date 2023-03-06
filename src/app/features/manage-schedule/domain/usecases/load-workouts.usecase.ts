import { Injectable } from '@angular/core';
import { UseCase } from '../../../../core/abstracts/usecase';
import { WorkoutsEntity } from '../entities/workouts.entity';
import { ManageScheduleRepository } from '../repositories/manage-schedule.repository';

@Injectable()
export class LoadWorkoutsUseCase implements UseCase<void, WorkoutsEntity> {
  constructor(private readonly repository: ManageScheduleRepository) {}

  execute(): Promise<WorkoutsEntity | Error> {
    return this.repository.loadWorkouts();
  }
}
