import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TaskService} from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;
  //@Output()
  //emitTaskFromAddTaskComponent = new EventEmitter<string>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addNewTask(){
    //this.emitTaskFromAddTaskComponent.emit(this.newTask);
    this.taskService.addNewTaskFromTaskService(this.newTask);
    this.newTask='';
  }

}
