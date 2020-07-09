import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng_atretiak/button';;
import { TabViewModule } from 'primeng_atretiak/tabview';
import { CodeHighlighterModule } from 'primeng_atretiak/codehighlighter';
import { FilterUtilsDemo } from './filterutilsdemo';
import { FilterUtilsDemoRoutingModule } from './filterutils-routing.module';
import { AutoCompleteModule } from 'primeng_atretiak/autocomplete';
import { TableModule } from 'primeng_atretiak/table';
import { InputTextModule } from 'primeng_atretiak/inputtext';

@NgModule({
	imports: [
		CommonModule,
		FilterUtilsDemoRoutingModule,
        ButtonModule,
        TabViewModule,
		CodeHighlighterModule,
		AutoCompleteModule,
		FormsModule,
		TableModule,
		InputTextModule
	],
	declarations: [
		FilterUtilsDemo
	]
})
export class FilterUtilsDemoModule {}
