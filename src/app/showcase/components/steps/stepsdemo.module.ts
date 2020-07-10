import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import {StepsDemoRoutingModule} from './stepsdemo-routing.module';
import {StepsModule} from '@nanitor/primeng/steps';
import {ToastModule} from '@nanitor/primeng/toast';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
