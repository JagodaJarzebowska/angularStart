import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  @Input()
  taskListFromToDoTaskComponent: Array<string> = [];
  @Output()
  emitDoneFromToDoTaskComponent = new EventEmitter<string>();
  @Output()
  emitRemoveFromToDoTaskComponent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task){
    this.emitRemoveFromToDoTaskComponent.emit(task);
  }

  isDone(task){
    this.emitDoneFromToDoTaskComponent.emit(task);
  }

}
