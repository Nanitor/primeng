import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GMapDemo} from './gmapdemo';
import {GMapDemoRoutingModule} from './gmapdemo-routing.module';
import {GMapModule} from 'primeng_atretiak/gmap';
import {ToastModule} from 'primeng_atretiak/toast';
import {CheckboxModule} from 'primeng_atretiak/checkbox';
import {DialogModule} from 'primeng_atretiak/dialog';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {ButtonModule} from 'primeng_atretiak/button';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		GMapDemoRoutingModule,
        GMapModule,
        ToastModule,
        InputTextModule,
        CheckboxModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		GMapDemo
	]
})
export class GMapDemoModule {}
