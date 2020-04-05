import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addNewTask() {
    const tasks: Task = ({ name: this.newTask, createDate: new Date(), isDone: false });
    this.taskService.addNewTaskFromTaskService(tasks);
    this.newTask = '';
  }

}
