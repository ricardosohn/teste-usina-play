import { Injectable } from '@angular/core';
import { UseCase } from '../../../../core/abstracts/usecase';
import { ProgramsEntity } from '../entities/programs.entity';
import { ManageScheduleRepository } from '../repositories/manage-schedule.repository';

@Injectable()
export class LoadProgramsUseCase implements UseCase<void, ProgramsEntity> {
  constructor(private readonly repository: ManageScheduleRepository) {}

  execute(): Promise<ProgramsEntity | Error> {
    return this.repository.loadPrograms();
  }
}
