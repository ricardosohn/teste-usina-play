import { ContentsEntity } from "../../domain/entities/contents.entity";
import { ProgramsEntity } from "../../domain/entities/programs.entity";
import { WorkoutsEntity } from "../../domain/entities/workouts.entity";


export interface ManageScheduleStateModel {
    workouts?: WorkoutsEntity;
    programs?: ProgramsEntity;
    contents?: ContentsEntity;
    isLoading: boolean;
    errorMessage: string;
}

export const defaultManageScheduleStateModel: ManageScheduleStateModel = {
    workouts: undefined,
    programs: undefined,
    contents: undefined,
    isLoading: false,
    errorMessage: '',
};
