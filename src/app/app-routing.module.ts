import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';

const routes: Routes = [
  { path: '', component: Template1Component },
  { path: 'template1', component: Template1Component },
  { path: 'template2', component: Template2Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
