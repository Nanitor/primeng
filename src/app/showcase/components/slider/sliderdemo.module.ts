import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SliderDemo} from './sliderdemo';
import {SliderDemoRoutingModule} from './sliderdemo-routing.module';
import {SliderModule} from 'primeng_atretiak/slider';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		SliderDemoRoutingModule,
        SliderModule,
        InputTextModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SliderDemo
	]
})
export class SliderDemoModule {}
