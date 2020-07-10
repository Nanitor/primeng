import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderListDemo} from './orderlistdemo';
import {OrderListDemoRoutingModule} from './orderlistdemo-routing.module';
import {OrderListModule} from '@nanitor/primeng/orderlist';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
