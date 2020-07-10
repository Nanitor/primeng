import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardDemo} from './carddemo';
import {CardDemoRoutingModule} from './carddemo-routing.module';
import {CardModule} from '@nanitor/primeng/card';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {ButtonModule} from '@nanitor/primeng/button';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		CardDemoRoutingModule,
		CardModule,
		ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CardDemo
	]
})
export class CardDemoModule {}
