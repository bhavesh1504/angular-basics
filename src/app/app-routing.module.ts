import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Component1Component } from './components/component1.component';
import { ContactComponent } from './components/contact/contact.component';
import { KidComponent } from './components/kid/kid/kid.component';
import { ViewchildComponent } from './components/viewchild-children/viewchild.component';

const routes: Routes = [
  {path: 'comp1', component: Component1Component},
  {path: 'contact', component: ContactComponent},
  {path: 'viewchild', component: ViewchildComponent},
  {path: 'kid', component: KidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
