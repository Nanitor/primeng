import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RTLDemo} from './rtldemo';
import {RTLDemoRoutingModule} from './rtldemo-routing.module';
import {DialogModule} from 'primeng_atretiak/dialog';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {ButtonModule} from 'primeng_atretiak/button';
import {AccordionModule} from 'primeng_atretiak/accordion';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		RTLDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		RTLDemo
	]
})
export class RTLDemoModule {}
