import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax'

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // observables are unicast
    // const observables = new Observable(sub => sub.next(Math.random()));

    // Subscriber1
    // observables.subscribe(d => console.log(d));

    // Subscriber2
    // observables.subscribe(d => console.log(d));

    // subject are multicast
    // const subject = new Subject();

    // Subscriber1
    // subject.subscribe(d => console.log(d));

    // Subscriber2
    // subject.subscribe(d => console.log(d));

    // subject.next(Math.random());

    // const subjects = new Subject();

    // const data = ajax('https://jsonplaceholder.typicode.com/users')

    // subjects.subscribe(d => console.log(d));
    // subjects.subscribe(d => console.log(d));

    // const results = data.subscribe(subjects)
    

    //Behaviour Subject

    // const subject = new Subject();

    // subject.subscribe(d => console.log(`Subject Sub 1 : ${d}`));

    // subject.next('Sub');

    // subject.subscribe(d => console.log(`Subject Sub 2 : ${d}`)); //returned nothing 
    

    // const behSub = new BehaviorSubject<string>('BSub');
    // behSub.subscribe(d => console.log(`Behaviour Sub 1 : ${d}`));

    // behSub.next('BeSub');

    // behSub.subscribe(d => console.log(`Behaviour Sub 2 : ${d}`));

    //ReplaySubject
    
    //  const $message = new ReplaySubject(1);
    //  $message.next('Hello.....'); //it will call 2 times
     

    //  $message.subscribe(d=>{
    //   console.log(`User 1: ${d}`);

    //  });

    //   $message.next('How Are You?');  //this 3 msgs will call 2 times
    //   $message.next('Had Lunch?');
    //   $message.next('God Bless You');


    //   $message.subscribe(d=>{
    //     console.log(`User 2: ${d}`);

    //   });

    //   $message.next('Byeee.....');// it will call 2 times

      //async Subject

      const async = new AsyncSubject();

      async.next('hello 1');
      async.next('hello 2');
      async.next('hello 3');
      async.complete();  // it is display only msg 3 because it will run only only last msg after complete...
      

      async.subscribe(d => {
        console.log(`user1: ${d}`)
      });
      async.next('hello 4');
      async.next('hello 5');

      async.complete(); // this will not work it will only show 3 msg because it will only see first complete.....
      
      async.subscribe(d => {
        console.log(`user2: ${d}`) // user 2 will display msg 3
      });
      
     }
     

  }

  


