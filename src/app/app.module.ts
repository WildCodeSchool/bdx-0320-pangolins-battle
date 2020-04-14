import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';
import {StepsModule} from 'primeng/steps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './pages/components/components.component';
import { TimerComponent } from './pages/components/timer/timer.component';
import { HomeComponent } from './pages/components/home/home.component';
import { NextBattleComponent } from './pages/components/home/next-battle/next-battle.component';
import { PreviousBattleComponent } from './pages/components/home/previous-battle/previous-battle.component';
import { PangoRingComponent } from './pages/components/pango-ring/pango-ring.component';
import { InstructionsComponent } from './pages/components/instructions/instructions.component';
import { InputAndSolutionComponent } from './pages/components/input-and-solution/input-and-solution.component';
import { OutputAndValidationComponent } from './pages/components/output-and-validation/output-and-validation.component';
import { StepperComponent } from './pages/components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ComponentsComponent,
    TimerComponent,
    HomeComponent,
    NextBattleComponent,
    PreviousBattleComponent,
    PangoRingComponent,
    InstructionsComponent,
    InputAndSolutionComponent,
    OutputAndValidationComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CalendarModule,
    AccordionModule,
    BrowserAnimationsModule,
    StepsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
