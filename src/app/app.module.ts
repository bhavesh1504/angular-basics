import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotifyboardComponent } from './components/notifyboard/notifyboard.component';
import { BsServiceService } from './core/bs-service.service';
import { ViewchildComponent } from './components/viewchild-children/viewchild.component';
import { ChildComponent } from './components/viewchild-children/children/child.component';
import { KidComponent } from './components/kid/kid/kid.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    ContactComponent,
    NotifyboardComponent,
    ViewchildComponent,
    ChildComponent,
    KidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
