import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  taskListFromToDoTaskComponent: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTaskListObs().subscribe((result: Array<Task>) => {
      this.taskListFromToDoTaskComponent = result.slice().filter(t => t.isDone ===false);
    })
  }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.taskService.deleteTaskFromTaskService(task);
  }

  isDone(task: Task) {
    this.taskService.isDoneFromTaskService(task);
  }

  getColor() {
    return this.taskListFromToDoTaskComponent.length >= 3 ? 'red' : 'green';
  }
}
