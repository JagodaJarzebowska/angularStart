import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-hide-panel',
  templateUrl: './hide-panel.component.html',
  styleUrls: ['./hide-panel.component.css']
})
export class HidePanelComponent implements OnInit {

  @Input()
  hideSectionParam: boolean;

  @Input()
  title: string;

  @Output()
  hideEvent = new EventEmitter<boolean>();

    constructor() {
    }

  ngOnInit(): void {
  }

  hideSection() {
    this.hideSectionParam = !this.hideSectionParam;
    this.hideEvent.emit(this.hideSectionParam);
  }
}
