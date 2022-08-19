import { Component, OnInit } from '@angular/core';
import { BsServiceService } from 'src/app/core/bs-service.service';

@Component({
  selector: 'app-notifyboard',
  templateUrl: './notifyboard.component.html',
  styleUrls: ['./notifyboard.component.css']
})
export class NotifyboardComponent implements OnInit {
notificationMessage:any    
  constructor(private service : BsServiceService) { }

  ngOnInit(): void {
    this.service.notificationSubject.subscribe(d => {
      this.notificationMessage = d;
    })
  }

}
