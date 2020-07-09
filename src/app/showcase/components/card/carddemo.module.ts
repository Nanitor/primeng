import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardDemo} from './carddemo';
import {CardDemoRoutingModule} from './carddemo-routing.module';
import {CardModule} from 'primeng_atretiak/card';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {ButtonModule} from 'primeng_atretiak/button';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

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
