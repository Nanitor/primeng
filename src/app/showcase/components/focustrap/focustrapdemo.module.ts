import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '@nanitor/primeng/dialog';
import { InputTextModule } from '@nanitor/primeng/inputtext';
import { ButtonModule } from '@nanitor/primeng/button';
import { AccordionModule } from '@nanitor/primeng/accordion';
import { TabViewModule } from '@nanitor/primeng/tabview';
import { CodeHighlighterModule } from '@nanitor/primeng/codehighlighter';
import { FocusTrapDemoRoutingModule } from './focustrapdemo-routing.module';
import { FocusTrapDemo } from './focustrapdemo';
import { AutoCompleteModule } from '@nanitor/primeng/autocomplete';
import { CalendarModule } from '@nanitor/primeng/calendar';
import { MultiSelectModule } from '@nanitor/primeng/multiselect';
import { DropdownModule } from '@nanitor/primeng/dropdown';
import { EditorModule } from '@nanitor/primeng/editor';
import { FocusTrapModule } from '@nanitor/primeng/focustrap';

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
