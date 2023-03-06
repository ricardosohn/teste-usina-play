import { Injectable } from '@angular/core';
import { UseCase } from '../../../../core/abstracts/usecase';
import { ContentsEntity } from '../entities/contents.entity';
import { ManageScheduleRepository } from '../repositories/manage-schedule.repository';

@Injectable()
export class LoadContentsUseCase implements UseCase<void, ContentsEntity> {
  constructor(private readonly repository: ManageScheduleRepository) {}

  execute(): Promise<ContentsEntity | Error> {
    return this.repository.loadContents();
  }
}
