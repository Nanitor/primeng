import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ValidationDemo} from './validationdemo';
import {ValidationDemoRoutingModule} from './validationdemo-routing.module';
import {ToastModule} from 'primeng_atretiak/toast';
import {MessageModule} from 'primeng_atretiak/message';
import {PanelModule} from 'primeng_atretiak/panel';
import {DropdownModule} from 'primeng_atretiak/dropdown';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {InputTextareaModule} from 'primeng_atretiak/inputtextarea';
import {AutoCompleteModule} from 'primeng_atretiak/autocomplete';
import {ButtonModule} from 'primeng_atretiak/button';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
        ReactiveFormsModule,
		ValidationDemoRoutingModule,
        ToastModule,
        MessageModule,
        PanelModule,
        DropdownModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        AutoCompleteModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ValidationDemo
	]
})
export class ValidationDemoModule {}
