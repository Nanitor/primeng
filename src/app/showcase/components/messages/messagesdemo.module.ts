import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesDemo} from './messagesdemo';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';
import {MessagesModule} from '@nanitor/primeng/messages';
import {MessageModule} from '@nanitor/primeng/message';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		MessagesDemoRoutingModule,
        MessagesModule,
        MessageModule,
        ButtonModule,
        InputTextModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		MessagesDemo
	]
})
export class MessagesDemoModule {}
