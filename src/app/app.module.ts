import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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
    NavComponent
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
  ],
  providers: [AlgorithmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
