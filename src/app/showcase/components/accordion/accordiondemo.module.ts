import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionDemo} from './accordiondemo';
import {AccordionDemoRoutingModule} from './accordiondemo-routing.module';
import {AccordionModule} from '@nanitor/primeng/accordion';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {ToastModule} from '@nanitor/primeng/toast';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		AccordionDemoRoutingModule,
        AccordionModule,
        ButtonModule,
        TabViewModule,
        ToastModule,
        CodeHighlighterModule
	],
	declarations: [
		AccordionDemo
	]
})
export class AccordionDemoModule {}
