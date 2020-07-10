import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ValidationDemo} from './validationdemo';
import {ValidationDemoRoutingModule} from './validationdemo-routing.module';
import {ToastModule} from '@nanitor/primeng/toast';
import {MessageModule} from '@nanitor/primeng/message';
import {PanelModule} from '@nanitor/primeng/panel';
import {DropdownModule} from '@nanitor/primeng/dropdown';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {InputTextareaModule} from '@nanitor/primeng/inputtextarea';
import {AutoCompleteModule} from '@nanitor/primeng/autocomplete';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
