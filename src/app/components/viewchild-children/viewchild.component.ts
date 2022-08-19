import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './children/child.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {
   
  // @ViewChild('highlight')marker!: ElementRef;
  @ViewChildren('highlight')marker!:QueryList<any>;
  @ViewChild('child')childs!:ChildComponent;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(){

    console.log(this.marker.length);
    
    // this.marker.nativeElement.style.color = "green";
    this.marker.first.nativeElement.style.color = "green";
    this.marker.last.nativeElement.style.color = "red";

    
  }
    inc(){
      this.childs.increment();
    }

    dec(){
      this.childs.decrement();
    }

}
