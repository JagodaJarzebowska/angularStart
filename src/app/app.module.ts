import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskService} from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { ShowDateDirective } from './shared/show-date.directive';
import { TransformTaskPipe } from './shared/transform-task.pipe';
import { SortByNamePipe } from './shared/sort-by-name.pipe';
import { HttpTesterComponent } from './http-tester/http-tester.component';
import { HttpTesterService } from './http-tester/http-tester.service';
import { HttpClientModule } from '@angular/common/http';
import { HidePanelComponent } from './hide-panel/hide-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    ShowDateDirective,
    TransformTaskPipe,
    SortByNamePipe,
    HttpTesterComponent,
    HidePanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [TaskService, HttpTesterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
