import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';
import {StepsModule} from 'primeng/steps';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './pages/timer/timer.component';
import { HomeComponent } from './pages/home/home.component';
import { NextBattleComponent } from './pages/home/next-battle/next-battle.component';
import { PreviousBattleComponent } from './pages/home/previous-battle/previous-battle.component';
import { PangoRingComponent } from './pages/pango-ring/pango-ring.component';
import { InstructionsComponent } from './pages/pango-ring/instructions/instructions.component';
import { InputAndSolutionComponent } from './pages/pango-ring/input-and-solution/input-and-solution.component';
import { StepperComponent } from './pages/pango-ring/stepper/stepper.component';
import { NavComponent } from './pages/nav/nav.component';
import { AlgorithmService } from './shared/services/algorithm/algorithm.service';
import { FooterComponent } from './pages/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { BattleListComponent } from './pages/admin/components/battle-list/battle-list.component';
import { AlgoAdminComponent } from './pages/algo-admin/algo-admin.component';
import { AlgoListComponent } from './pages/algo-admin/algo-list/algo-list.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AlgoFormComponent } from './pages/algo-admin/algo-list/algo-form/algo-form.component';
registerLocaleData(localeFr, 'fr');
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { LoaderService } from './shared/services/loader/loader.service';
import { LoaderInterceptor } from './shared/component/loader-interceptor';




@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    HomeComponent,
    NextBattleComponent,
    PreviousBattleComponent,
    PangoRingComponent,
    InstructionsComponent,
    InputAndSolutionComponent,
    StepperComponent,
    NavComponent,
    FooterComponent,
    AdminComponent,
    BattleListComponent,
    AlgoAdminComponent,
    AlgoListComponent,
    AlgoFormComponent,
    AboutComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    AccordionModule,
    BrowserAnimationsModule,
    StepsModule,
    InputTextareaModule,
    HttpClientModule,
  ],
  providers: [
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
