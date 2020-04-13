import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PangoRingComponent } from './pages/components/pango-ring/pango-ring.component';
import { HomeComponent } from './pages/components/home/home.component';


const routes: Routes = [
  {path: 'pango-ring/:id', component: PangoRingComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
