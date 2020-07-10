import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CheckboxDemo} from './checkboxdemo';
import {CheckboxDemoRoutingModule} from './checkboxdemo-routing.module';
import {CheckboxModule} from '@nanitor/primeng/checkbox';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		CheckboxDemoRoutingModule,
        CheckboxModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CheckboxDemo
	]
})
export class CheckboxDemoModule {}
