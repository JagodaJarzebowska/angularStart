import{Component}from'@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {

 newTask: string;
 taskList: Array<string> = [];
 doneTaskList: Array<string> = [];

  addNewTask() {
    if(this.newTask !== undefined){
      this.taskList.push(this.newTask);
    }
    this.newTask = '';
  }

  deleteTask(task){
    this.taskList = this.taskList.filter( data => data !== task);
  }

  isDone(task){
    this.doneTaskList.push(task);
    this.deleteTask(task);
  }

}
