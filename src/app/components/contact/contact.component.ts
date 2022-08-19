import { Component, OnInit } from '@angular/core';
import { BsServiceService } from 'src/app/core/bs-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service : BsServiceService) { }

  ngOnInit(): void {
  }

  sendMessage(data:any){

    this.service.sendNotification(data.value)

  }

}
