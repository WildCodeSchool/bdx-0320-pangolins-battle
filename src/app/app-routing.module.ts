import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PangoRingComponent } from './pages/pango-ring/pango-ring.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlgoAdminComponent } from './pages/algo-admin/algo-admin.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {path: 'pango-ring/:id', component: PangoRingComponent},
  {path: 'pango-ring', component: PangoRingComponent},
  {path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-algo', component: AlgoAdminComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
