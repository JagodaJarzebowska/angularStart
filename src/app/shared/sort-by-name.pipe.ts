import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task.model';

@Pipe({
  name: 'sortByName',
  // pure: false -> true   TodoTaskComponent -> this.taskListFromToDoTaskComponent = result.slice();
})
export class SortByNamePipe implements PipeTransform {

  transform(value: Array<Task>, ...args: unknown[]): Array<Task> {
    return value.sort((a, b) => {
       if(a.name.toLowerCase() > b.name.toLowerCase()){
         return 1;
       } else {
         return -1;
       }
    });
  }

}
