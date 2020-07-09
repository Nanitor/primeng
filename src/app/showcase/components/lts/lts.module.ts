import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LTSComponent} from './lts.component';
import {LTSRoutingModule} from './lts-routing.module';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';
import {AccordionModule} from 'primeng_atretiak/accordion';

@NgModule({
  imports: [
    CommonModule,
    LTSRoutingModule,
    CodeHighlighterModule,
    AccordionModule
  ],
  declarations: [
    LTSComponent
  ]
})
export class LTSModule {}