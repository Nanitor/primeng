import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDemo} from './buttondemo';
import {ButtonDemoRoutingModule} from './buttondemo-routing.module';
import {ButtonModule} from 'primeng_atretiak/button';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';
import { ProgressSpinnerModule } from 'primeng_atretiak/progressspinner';

@NgModule({
	imports: [
		CommonModule,
		ButtonDemoRoutingModule,
        ButtonModule,
        TabViewModule,
		CodeHighlighterModule,
		ProgressSpinnerModule
	],
	declarations: [
		ButtonDemo
	]
})
export class ButtonDemoModule {}
