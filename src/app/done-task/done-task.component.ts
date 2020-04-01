import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  //  @Input()
  taskListFromDoneTaskComponent: Array<Task> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getDoneTaskListObs().subscribe((result: Array<Task>) => {
      this.taskListFromDoneTaskComponent = result;
    })
  }

  ngOnInit(): void {
  }

}
