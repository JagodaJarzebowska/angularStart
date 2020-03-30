import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  //  @Input()
  taskListFromToDoTaskComponent: Array<Task> = [];
  // @Output()
  //  emitDoneFromToDoTaskComponent = new EventEmitter<string>();
  //  @Output()
  //  emitRemoveFromToDoTaskComponent = new EventEmitter<string>();

  constructor(private taskService: TaskService) {
    this.taskService.getTaskListObs().subscribe((result: Array<Task>) => {
      this.taskListFromToDoTaskComponent = result;
    })
  }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    // this.emitRemoveFromToDoTaskComponent.emit(task);
    this.taskService.deleteTaskFromTaskService(task);
  }

  isDone(task: Task) {
    // this.emitDoneFromToDoTaskComponent.emit(task);
    task.endDate = new Date();
    this.taskService.isDoneFromTaskService(task);
  }

  getColor() {
    return this.taskListFromToDoTaskComponent.length >= 3 ? 'red' : 'green';
  }
}
