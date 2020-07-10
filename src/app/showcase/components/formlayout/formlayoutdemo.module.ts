import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FormLayoutDemo} from './formlayoutdemo';
import {FormLayoutDemoRoutingModule} from './formlayout-routing.module';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {ButtonModule} from '@nanitor/primeng/button';
import {CheckboxModule} from '@nanitor/primeng/checkbox';
import {RadioButtonModule} from '@nanitor/primeng/radiobutton';
import {DropdownModule} from '@nanitor/primeng/dropdown';
import {InputTextareaModule} from '@nanitor/primeng/inputtextarea';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
