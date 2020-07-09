import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng_atretiak/dialog';
import { InputTextModule } from 'primeng_atretiak/inputtext';
import { ButtonModule } from 'primeng_atretiak/button';
import { AccordionModule } from 'primeng_atretiak/accordion';
import { TabViewModule } from 'primeng_atretiak/tabview';
import { CodeHighlighterModule } from 'primeng_atretiak/codehighlighter';
import { FocusTrapDemoRoutingModule } from './focustrapdemo-routing.module';
import { FocusTrapDemo } from './focustrapdemo';
import { AutoCompleteModule } from 'primeng_atretiak/autocomplete';
import { CalendarModule } from 'primeng_atretiak/calendar';
import { MultiSelectModule } from 'primeng_atretiak/multiselect';
import { DropdownModule } from 'primeng_atretiak/dropdown';
import { EditorModule } from 'primeng_atretiak/editor';
import { FocusTrapModule } from 'primeng_atretiak/focustrap';

@NgModule({
	imports: [
		CommonModule,
		FocusTrapDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        CodeHighlighterModule,
        FocusTrapModule,
		AutoCompleteModule,
		CalendarModule,
		MultiSelectModule,
		DropdownModule,
		EditorModule
	],
	declarations: [
		FocusTrapDemo
	]
})
export class FocusTrapDemoModule {}
