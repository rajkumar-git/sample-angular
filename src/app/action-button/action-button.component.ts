import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {
  @Input() btnName:string | undefined;
  @Input() btnClass:string = 'btn-primary';
  @Input() data:any;
  @Output() eventName = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireBtn(){
    this.eventName.emit( {action: this.btnName, data: this.data});
  }
}
