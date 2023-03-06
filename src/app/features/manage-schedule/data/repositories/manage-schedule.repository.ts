import { Injectable } from "@angular/core";
import { ContentsEntity } from "../../domain/entities/contents.entity";
import { ProgramsEntity } from "../../domain/entities/programs.entity";
import { WorkoutsEntity } from "../../domain/entities/workouts.entity";
import { ManageScheduleRepository } from "../../domain/repositories/manage-schedule.repository";
import { ManageScheduleDataSource } from "../datasources/manage-schedule.datasource";

@Injectable()
export class ManageScheduleRepositoryImpl implements ManageScheduleRepository {
    
  constructor(private readonly dataSource: ManageScheduleDataSource) {}

    async loadWorkouts(): Promise<WorkoutsEntity | Error> {
        try {
            const workouts = await this.dataSource.loadWorkouts();
            if (workouts) {
              return workouts;
            }
            throw new Error();
          } catch (error) {
            return new Error('Failed getting workouts');
        }
    }
    async loadPrograms(): Promise<Error | ProgramsEntity> {
        try {
            const programs = await this.dataSource.loadPrograms();
            if (programs) {
              return programs;
            }
            throw new Error();
          } catch (error) {
            return new Error('Failed getting programs');
        }
    }
    async loadContents(): Promise<Error | ContentsEntity> {
        try {
            const contents = await this.dataSource.loadContents();
            if (contents) {
              return contents;
            }
            throw new Error();
          } catch (error) {
            return new Error('Failed getting contents');
        }
    }

}