import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CheckboxDemo} from './checkboxdemo';
import {CheckboxDemoRoutingModule} from './checkboxdemo-routing.module';
import {CheckboxModule} from 'primeng_atretiak/checkbox';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

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
