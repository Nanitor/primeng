import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataViewDemo} from './dataviewdemo';
import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
import {DataViewModule} from 'primeng_atretiak/dataview';
import {PanelModule} from 'primeng_atretiak/panel';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {ButtonModule} from 'primeng_atretiak/button';
import {DialogModule} from 'primeng_atretiak/dialog';
import {DropdownModule} from 'primeng_atretiak/dropdown';
import {TabViewModule} from 'primeng_atretiak/tabview';

import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		DataViewDemoRoutingModule,
        DataViewModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        ButtonModule,
        CodeHighlighterModule
	],
	declarations: [
		DataViewDemo
	]
})
export class DataViewDemoModule {}