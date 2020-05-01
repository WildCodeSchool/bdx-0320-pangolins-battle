import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PangoRingComponent } from './pages/pango-ring/pango-ring.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlgoAdminComponent } from './pages/algo-admin/algo-admin.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {path: 'pango-ring/:id', component: PangoRingComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-algo', component: AlgoAdminComponent},
  {path: 'about', component: AboutComponent},
  {path: 'auth/:token', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
