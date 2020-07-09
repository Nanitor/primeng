import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import {StepsDemoRoutingModule} from './stepsdemo-routing.module';
import {StepsModule} from 'primeng_atretiak/steps';
import {ToastModule} from 'primeng_atretiak/toast';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		StepsDemoRoutingModule,
        StepsModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		StepsDemo
	]
})
export class StepsDemoModule {}
