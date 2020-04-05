import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable()
export class TaskService {

  private taskListObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    
  }

  addNewTaskFromTaskService(task: Task) {
    if (task !== undefined) {
      const list = this.taskListObs.getValue();
      list.push(task);
      this.taskListObs.next(list);
    }
  }

  deleteTaskFromTaskService(task: Task) {
    const list = this.taskListObs.getValue().filter(data => data !== task);
    this.taskListObs.next(list);
  }

  isDoneFromTaskService(task: Task) {
    task.endDate = new Date();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);   // rozpropagowanie, info że w taskListObs są nowe elementy
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }


}
