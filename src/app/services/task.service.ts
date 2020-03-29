import{ Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TaskService {

  private taskListFromTaskService: Array<string> = [];
  private doneTaskListFromTaskService: Array<string> = [];

  private taskListObs = new BehaviorSubject<Array<string>>(this.taskListFromTaskService);
  private doneTaskListObs = new BehaviorSubject<Array<string>>(this.doneTaskListFromTaskService);

  constructor(){
    this.taskListObs.next(this.taskListFromTaskService);
  }

  addNewTaskFromTaskService(task) {
    if(task !== undefined){
      this.taskListFromTaskService.push(task);
      this.taskListObs.next(this.taskListFromTaskService);
    }
  }

  deleteTaskFromTaskService(task){
    this.taskListFromTaskService = this.taskListFromTaskService.filter( data => data !== task);
    this.taskListObs.next(this.taskListFromTaskService);
  }

  isDoneFromTaskService(task){
    this.doneTaskListFromTaskService.push(task);
    this.deleteTaskFromTaskService(task);
     this.doneTaskListObs.next(this.doneTaskListFromTaskService);
  }

  getTaskListObs(): Observable<Array<string>>{
    return this.taskListObs.asObservable();
  }

  getDoneTaskListObs(): Observable<Array<string>>{
    return this.doneTaskListObs.asObservable();
  }

}
