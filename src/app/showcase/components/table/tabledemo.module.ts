import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableDemo } from './tabledemo';
import { TableBasicDemo } from './tablebasicdemo';
import { TableDynamicDemo } from './tabledynamicdemo';
import { TablePageDemo } from './tablepagedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableSectionsDemo } from './tablesectionsdemo';
import { TableStyleDemo } from './tablestyledemo';
import { TableLazyDemo } from './tablelazydemo';
import { TableExportDemo } from './tableexportdemo';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableVirtualScrollDemo } from './tablevirtualscrolldemo';
import { TableFlexScrollDemo } from './tableflexscrolldemo';
import { TableColToggleDemo } from './tablecoltoggledemo';
import { TableCrudDemo } from './tablecruddemo';
import { TableResponsiveDemo } from './tableresponsivedemo';
import { TableContextMenuDemo } from './tablecontextmenudemo';
import { TableColResizeDemo } from './tablecolresizedemo';
import { TableReorderDemo } from './tablereorderdemo';
import { TableEditDemo } from './tableeditdemo';
import { TableStateDemo } from './tablestatedemo';
import { TableStickyDemo } from './tablestickydemo';
import { TableRowGroupDemo } from './tablerowgroupdemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableModule } from 'primeng_atretiak/table';
import { SliderModule } from 'primeng_atretiak/slider';
import { MultiSelectModule } from 'primeng_atretiak/multiselect';
import { ContextMenuModule } from 'primeng_atretiak/contextmenu';
import { ToastModule } from 'primeng_atretiak/toast';
import { ButtonModule } from 'primeng_atretiak/button';
import { CalendarModule } from 'primeng_atretiak/calendar';
import { DialogModule } from 'primeng_atretiak/dialog';
import { DropdownModule } from 'primeng_atretiak/dropdown';
import { InputTextModule } from 'primeng_atretiak/inputtext';
import { ProgressBarModule } from 'primeng_atretiak/progressbar';
import { TabViewModule } from 'primeng_atretiak/tabview';
import { CodeHighlighterModule } from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TableDemoRoutingModule,
        TableModule,
        CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
        InputTextModule,
        ProgressBarModule,
		TabViewModule,
		CodeHighlighterModule
	],
	declarations: [
		TableDemo,
		TableBasicDemo,
		TableDynamicDemo,
		TablePageDemo,
		TableSortDemo,
		TableSelectionDemo,
		TableSectionsDemo,
		TableFilterDemo,
		TableStyleDemo,
		TableLazyDemo,
		TableExportDemo,
		TableColGroupDemo,
		TableRowExpansionDemo,
        TableScrollDemo,
        TableVirtualScrollDemo,
        TableFlexScrollDemo,
		TableColToggleDemo,
		TableCrudDemo,
		TableResponsiveDemo,
		TableContextMenuDemo,
		TableColResizeDemo,
		TableReorderDemo,
		TableEditDemo,
        TableRowGroupDemo,
        TableStateDemo,
        TableStickyDemo
	]
})
export class TableDemoModule { }
