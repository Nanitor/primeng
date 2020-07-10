import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressSpinnerDemo} from './progressspinnerdemo';
import {ProgressSpinnerDemoRoutingModule} from './progressspinnerdemo-routing.module';
import {ProgressSpinnerModule} from '@nanitor/primeng/progressspinner';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
