import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@nanitor/primeng/button';;
import { TabViewModule } from '@nanitor/primeng/tabview';
import { CodeHighlighterModule } from '@nanitor/primeng/codehighlighter';
import { FilterUtilsDemo } from './filterutilsdemo';
import { FilterUtilsDemoRoutingModule } from './filterutils-routing.module';
import { AutoCompleteModule } from '@nanitor/primeng/autocomplete';
import { TableModule } from '@nanitor/primeng/table';
import { InputTextModule } from '@nanitor/primeng/inputtext';

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
