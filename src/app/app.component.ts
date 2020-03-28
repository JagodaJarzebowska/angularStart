import{Component}from'@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {

 taskListFromAppComponent: Array<string> = [];
 doneTaskListFromAppComponent: Array<string> = [];

  addNewTaskFromAppComponent(task) {
    if(task !== undefined){
      this.taskListFromAppComponent.push(task);
    }
  }

  deleteTaskFromAppComponent(task){
    this.taskListFromAppComponent = this.taskListFromAppComponent.filter( data => data !== task);
  }

  isDoneFromAppComponent(task){
    this.doneTaskListFromAppComponent.push(task);
    this.deleteTaskFromAppComponent(task);
  }

}
