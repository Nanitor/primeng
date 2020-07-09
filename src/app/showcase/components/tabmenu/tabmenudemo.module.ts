import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenuDemo, InfoComponent, MessageComponent} from './tabmenudemo';
import {TabMenuDemoRoutingModule} from './tabmenudemo-routing.module';
import {TabMenuModule} from 'primeng_atretiak/tabmenu';
import {TabViewModule} from 'primeng_atretiak/tabview';
import { MessageModule } from 'primeng_atretiak/message';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		TabMenuDemoRoutingModule,
        TabMenuModule,
		TabViewModule,
		MessageModule,
        CodeHighlighterModule
	],
	declarations: [
		TabMenuDemo,
		InfoComponent,
		MessageComponent
	]
})
export class TabMenuDemoModule {}
