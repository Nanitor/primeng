import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SliderDemo} from './sliderdemo';
import {SliderDemoRoutingModule} from './sliderdemo-routing.module';
import {SliderModule} from '@nanitor/primeng/slider';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
