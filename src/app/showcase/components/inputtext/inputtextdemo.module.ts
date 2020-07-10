import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputTextDemo} from './inputtextdemo';
import {InputTextDemoRoutingModule} from './inputtextdemo-routing.module';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		InputTextDemoRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputTextDemo
	]
})
export class InputTextDemoModule {}
