import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabViewDemo} from './tabviewdemo';
import {TabViewDemoRoutingModule} from './tabviewdemo-routing.module';
import {ToastModule} from 'primeng_atretiak/toast';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		TabViewDemoRoutingModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TabViewDemo
	]
})
export class TabViewDemoModule {}
