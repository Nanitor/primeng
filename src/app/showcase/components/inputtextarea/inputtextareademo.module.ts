import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputTextareaDemo} from './inputtextareademo';
import {InputTextareaDemoRoutingModule} from './inputtextareademo-routing.module';
import {InputTextareaModule} from '@nanitor/primeng/inputtextarea';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		InputTextareaDemoRoutingModule,
        InputTextareaModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputTextareaDemo
	]
})
export class InputTextareaDemoModule {}
