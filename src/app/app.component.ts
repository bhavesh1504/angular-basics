import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-basics';
  constructor(){}
  
  // mysub! : Subscription 
  ngOnInit(){
    // promise
    // const promise = new Promise(resolve =>{
      // console.log('promise');
      
    //   setTimeout(()=>{
    //     resolve('Promise Working 1');
    //     resolve('Promise Working 2');
    //     resolve('Promise Working 3');
    //     resolve('Promise Working 4');
    //   }, 1000)
    // })
    // promise.then(result => console.log(result));

    // observable
    // const observable = new Observable(sub =>{
      // console.log('observable');
      // let counter = 0;
      // setInterval(()=>{
      //   counter = counter +1;
      //   sub.next(counter);
        // sub.next('Observable Working 1');
        // sub.next('Observable Working 2');
        // sub.next('Observable Working 3');
        // sub.next('Observable Working 4');
    //   },1000)
    // })
    // observable.pipe(
    //   filter(d => d === 'Observable Working 2')
    // )
    // this.mysub = observable.subscribe(result => console.log('Subscriber Count',result));
      
  }

  ngOnDestroy(): void {
    // this.mysub.unsubscribe();
  }


}
