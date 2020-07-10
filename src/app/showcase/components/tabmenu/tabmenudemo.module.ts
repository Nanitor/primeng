import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenuDemo, InfoComponent, MessageComponent} from './tabmenudemo';
import {TabMenuDemoRoutingModule} from './tabmenudemo-routing.module';
import {TabMenuModule} from '@nanitor/primeng/tabmenu';
import {TabViewModule} from '@nanitor/primeng/tabview';
import { MessageModule } from '@nanitor/primeng/message';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
