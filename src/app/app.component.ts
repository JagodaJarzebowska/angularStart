import{Component, Output, EventEmitter}from'@angular/core';
import { error } from 'protractor';


@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {

    hidePanel: boolean = false;


    changeHidden(event){
        this.hidePanel = event;
    }
}
