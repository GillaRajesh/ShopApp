import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from './body/body.component'
import {SareesComponent} from './sarees/sarees.component'

const routes: Routes = [
  { path: 'body-component', component: BodyComponent },
  { path: 'sarees-component', component: SareesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
