import{ Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable()
export class TaskService {

  private taskListFromTaskService: Array<Task> = [];
  private doneTaskListFromTaskService: Array<Task> = [];

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private doneTaskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(){
    this.taskListObs.next(this.taskListFromTaskService);
  }

  addNewTaskFromTaskService(task: Task) {
    if(task !== undefined){
      this.taskListFromTaskService.push(task);
      this.taskListObs.next(this.taskListFromTaskService);
    }
  }

  deleteTaskFromTaskService(task: Task){
    this.taskListFromTaskService = this.taskListFromTaskService.filter( data => data !== task);
    this.taskListObs.next(this.taskListFromTaskService);
  }

  isDoneFromTaskService(task: Task){
    this.doneTaskListFromTaskService.push(task);
    this.deleteTaskFromTaskService(task);
     this.doneTaskListObs.next(this.doneTaskListFromTaskService);
  }

  getTaskListObs(): Observable<Array<Task>>{
    return this.taskListObs.asObservable();
  }

  getDoneTaskListObs(): Observable<Array<Task>>{
    return this.doneTaskListObs.asObservable();
  }

}
