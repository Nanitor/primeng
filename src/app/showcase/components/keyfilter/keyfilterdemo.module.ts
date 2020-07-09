import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyFilterDemo} from './keyfilterdemo';
import {FormsModule} from '@angular/forms';
import {MessageModule} from 'primeng_atretiak/message';
import {KeyFilterDemoRoutingModule} from './keyfilterdemo-routing.module';
import {KeyFilterModule} from 'primeng_atretiak/keyfilter';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		KeyFilterDemoRoutingModule,
		KeyFilterModule,
		InputTextModule,
		MessageModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		KeyFilterDemo
	]
})
export class KeyFilterDemoModule {}
