import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressBarDemo} from './progressbardemo';
import {ProgressBarDemoRoutingModule} from './progressbardemo-routing.module';
import {ProgressBarModule} from '@nanitor/primeng/progressbar';
import {ToastModule} from '@nanitor/primeng/toast';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ProgressBarDemoRoutingModule,
        ProgressBarModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ProgressBarDemo
	]
})
export class ProgressBarDemoModule {}
