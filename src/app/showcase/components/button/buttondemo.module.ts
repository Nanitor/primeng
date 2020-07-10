import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDemo} from './buttondemo';
import {ButtonDemoRoutingModule} from './buttondemo-routing.module';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';
import { ProgressSpinnerModule } from '@nanitor/primeng/progressspinner';

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
