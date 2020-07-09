import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListDemo} from './orderlistdemo';
import {OrderListDemoRoutingModule} from './orderlistdemo-routing.module';
import {OrderListModule} from 'primeng_atretiak/orderlist';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		OrderListDemoRoutingModule,
        OrderListModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		OrderListDemo
	]
})
export class OrderListDemoModule {}
