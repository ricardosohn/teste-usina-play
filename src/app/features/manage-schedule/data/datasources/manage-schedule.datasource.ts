import { ContentsEntity } from "../../domain/entities/contents.entity";
import { ProgramsEntity } from "../../domain/entities/programs.entity";
import { WorkoutsEntity } from "../../domain/entities/workouts.entity";

export abstract class ManageScheduleDataSource {
    abstract loadWorkouts(): Promise<WorkoutsEntity>;
    abstract loadPrograms(): Promise<ProgramsEntity>;
    abstract loadContents(): Promise<ContentsEntity>;
  }
  