import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChipsDemo} from './chipsdemo';
import {ChipsDemoRoutingModule} from './chipsdemo-routing.module';
import {ChipsModule} from 'primeng_atretiak/chips';
import {ButtonModule} from 'primeng_atretiak/button';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ChipsDemoRoutingModule,
        ChipsModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ChipsDemo
	]
})
export class ChipsDemoModule {}
