import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 public counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.counter++;
  }

  decrement(){
    this.counter--;
  }

}
