import { Component, OnInit, Input } from '@angular/core';
import { TaskService} from '../services/task.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

//  @Input()
  taskListFromDoneTaskComponent: Array<string> = [];

  constructor(private taskService: TaskService) {
    this.taskService.getDoneTaskListObs().subscribe((result: Array<string>) =>{
    this.taskListFromDoneTaskComponent = result;
    })
  }

  ngOnInit(): void {
  }

}
