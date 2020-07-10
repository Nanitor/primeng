import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InplaceDemo} from './inplacedemo';
import {InplaceDemoRoutingModule} from './inplacedemo-routing.module';
import {InplaceModule} from '@nanitor/primeng/inplace';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {TableModule} from '@nanitor/primeng/table';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
