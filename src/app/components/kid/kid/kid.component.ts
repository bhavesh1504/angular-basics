import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit {
  @Input()
  uname:string;

  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
 
  

  ngOnInit(): void {
  }

  passData(){
    console.log(this.passData)
    this.notify.emit('This Msg Is Coming From Child');
  }

}
