import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyFilterDemo} from './keyfilterdemo';
import {FormsModule} from '@angular/forms';
import {MessageModule} from '@nanitor/primeng/message';
import {KeyFilterDemoRoutingModule} from './keyfilterdemo-routing.module';
import {KeyFilterModule} from '@nanitor/primeng/keyfilter';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
