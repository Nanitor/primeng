import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDemo} from './dragdropdemo';
import {DragDropDemoRoutingModule} from './dragdropdemo-routing.module';
import {DragDropModule} from '@nanitor/primeng/dragdrop';
import {PanelModule} from '@nanitor/primeng/panel';
import {TableModule} from '@nanitor/primeng/table';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';


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
