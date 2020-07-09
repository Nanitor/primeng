import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldsetDemo} from './fieldsetdemo';
import {FieldsetDemoRoutingModule} from './fieldsetdemo-routing.module';
import {FieldsetModule} from 'primeng_atretiak/fieldset';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		FieldsetDemoRoutingModule,
        FieldsetModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		FieldsetDemo
	]
})
export class FieldsetDemoModule {}
