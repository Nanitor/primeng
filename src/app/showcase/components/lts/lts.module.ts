import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LTSComponent} from './lts.component';
import {LTSRoutingModule} from './lts-routing.module';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';
import {AccordionModule} from '@nanitor/primeng/accordion';

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