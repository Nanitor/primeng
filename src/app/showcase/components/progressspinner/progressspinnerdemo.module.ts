import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressSpinnerDemo} from './progressspinnerdemo';
import {ProgressSpinnerDemoRoutingModule} from './progressspinnerdemo-routing.module';
import {ProgressSpinnerModule} from 'primeng_atretiak/progressspinner';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ProgressSpinnerDemoRoutingModule,
        ProgressSpinnerModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ProgressSpinnerDemo
	]
})
export class ProgressSpinnerDemoModule {}
