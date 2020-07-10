import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferDemo} from './deferdemo';
import {DeferDemoRoutingModule} from './deferdemo-routing.module';
import {DeferModule} from '@nanitor/primeng/defer';
import {TableModule} from '@nanitor/primeng/table';
import {ToastModule} from '@nanitor/primeng/toast';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		DeferDemoRoutingModule,
        DeferModule,
        ToastModule,
        TabViewModule,
        TableModule,
        CodeHighlighterModule
	],
	declarations: [
		DeferDemo
	]
})
export class DeferDemoModule {}
