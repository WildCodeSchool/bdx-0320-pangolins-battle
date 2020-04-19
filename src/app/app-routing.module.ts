import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PangoRingComponent } from './pages/pango-ring/pango-ring.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: 'pango-ring/:id', component: PangoRingComponent},
  {path: 'pango-ring', component: PangoRingComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
