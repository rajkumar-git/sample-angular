import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() greetMessage: string | undefined;
  @Output() sendMessageEvent = new EventEmitter();
    
  constructor() { }
  ngOnInit(): void {
  }

  greet(): void {
    this.sendMessageEvent.emit('Hello From welcome child Component');

  }

}
