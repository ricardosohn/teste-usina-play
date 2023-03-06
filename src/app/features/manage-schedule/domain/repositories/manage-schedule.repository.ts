import { ContentsEntity } from "../entities/contents.entity";
import { ProgramsEntity } from "../entities/programs.entity";
import { WorkoutsEntity } from "../entities/workouts.entity";

export abstract class ManageScheduleRepository {
  abstract loadWorkouts(): Promise<WorkoutsEntity | Error>;
  abstract loadPrograms(): Promise<ProgramsEntity | Error>;
  abstract loadContents(): Promise<ContentsEntity | Error>;
}
