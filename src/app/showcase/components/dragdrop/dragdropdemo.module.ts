import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDemo} from './dragdropdemo';
import {DragDropDemoRoutingModule} from './dragdropdemo-routing.module';
import {DragDropModule} from 'primeng_atretiak/dragdrop';
import {PanelModule} from 'primeng_atretiak/panel';
import {TableModule} from 'primeng_atretiak/table';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';


@NgModule({
	imports: [
		CommonModule,
		DragDropDemoRoutingModule,
        DragDropModule,
        PanelModule,
        TableModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DragDropDemo
	]
})
export class DragDropDemoModule {}
