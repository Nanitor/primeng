import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataViewDemo} from './dataviewdemo';
import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
import {DataViewModule} from '@nanitor/primeng/dataview';
import {PanelModule} from '@nanitor/primeng/panel';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {ButtonModule} from '@nanitor/primeng/button';
import {DialogModule} from '@nanitor/primeng/dialog';
import {DropdownModule} from '@nanitor/primeng/dropdown';
import {TabViewModule} from '@nanitor/primeng/tabview';

import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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