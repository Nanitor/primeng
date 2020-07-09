import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorDemo} from './paginatordemo';
import {PaginatorDemoRoutingModule} from './paginatordemo-routing.module';
import {PaginatorModule} from 'primeng_atretiak/paginator';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		PaginatorDemoRoutingModule,
        PaginatorModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		PaginatorDemo
	]
})
export class PaginatorDemoModule {}
