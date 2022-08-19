import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BsServiceService {

  // public notificationSubject = new Subject<any>();
  public notificationSubject = new BehaviorSubject<any>('<Your Message>');

  constructor() { }
  sendNotification(data:any){
    this.notificationSubject.next(data)
  }
}
