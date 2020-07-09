import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesDemo} from './messagesdemo';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';
import {MessagesModule} from 'primeng_atretiak/messages';
import {MessageModule} from 'primeng_atretiak/message';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {ButtonModule} from 'primeng_atretiak/button';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

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
