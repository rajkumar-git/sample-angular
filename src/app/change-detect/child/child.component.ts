import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements DoCheck {

  constructor(private cd: ChangeDetectorRef) { }

  @Input() person: Person | undefined;

  ngDoCheck() {
    console.log("Child changed!");
    this.cd.detectChanges();    
  }
}

export interface Person {
  name: string;
  age: number;
}
