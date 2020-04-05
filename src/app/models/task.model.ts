export interface Task {
    name: string;
    createDate: Date;
    endDate?: Date;
    isDone: boolean;
}