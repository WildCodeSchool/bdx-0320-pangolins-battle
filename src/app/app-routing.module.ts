import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PangoRingComponent } from './pages/pango-ring/pango-ring.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlgoAdminComponent } from './pages/algo-admin/algo-admin.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ClassementComponent } from './pages/classement/classement.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'pango-ring/:BattleId/:AlgoId', component: PangoRingComponent, canActivate: [AuthGuard]},
  {path: 'classement', component: ClassementComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: 'admin-algo/:id', component: AlgoAdminComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'oauth/:token', component: LoginComponent},
  {path: 'classement/:BattleId', component: ClassementComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
