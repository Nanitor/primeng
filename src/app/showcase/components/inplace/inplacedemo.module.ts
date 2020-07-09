import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InplaceDemo} from './inplacedemo';
import {InplaceDemoRoutingModule} from './inplacedemo-routing.module';
import {InplaceModule} from 'primeng_atretiak/inplace';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {TableModule} from 'primeng_atretiak/table';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		InplaceDemoRoutingModule,
        InplaceModule,
        InputTextModule,
        TableModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InplaceDemo
	]
})
export class InplaceDemoModule {}
