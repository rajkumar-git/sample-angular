import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-change-detect',
  templateUrl: './parent-change-detect.component.html',
  styleUrls: ['./parent-change-detect.component.css']
})
export class ParentChangeDetectComponent implements OnInit {
  public person:Person = {
    name: 'John Doe',
    age: 20
  };
  constructor() { }  
  ngOnInit(): void {
    
  }
  public reassign(): void {
    this.person = {
      name: this.person.name,
      age: this.person.age
    };
  }

}
export interface Person {
  name: string;
  age: number;
}
