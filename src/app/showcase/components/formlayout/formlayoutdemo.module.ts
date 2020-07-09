import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FormLayoutDemo} from './formlayoutdemo';
import {FormLayoutDemoRoutingModule} from './formlayout-routing.module';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {ButtonModule} from 'primeng_atretiak/button';
import {CheckboxModule} from 'primeng_atretiak/checkbox';
import {RadioButtonModule} from 'primeng_atretiak/radiobutton';
import {DropdownModule} from 'primeng_atretiak/dropdown';
import {InputTextareaModule} from 'primeng_atretiak/inputtextarea';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		FormLayoutDemoRoutingModule,
		InputTextModule,
		CheckboxModule,
		ButtonModule,
        TabViewModule,
		CodeHighlighterModule,
		RadioButtonModule,
		InputTextareaModule,
		DropdownModule,
		FormsModule
	],
	declarations: [
		FormLayoutDemo
	]
})
export class FormLayoutDemoModule {}
