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
import { TableModule } from '@nanitor/primeng/table';
import { SliderModule } from '@nanitor/primeng/slider';
import { MultiSelectModule } from '@nanitor/primeng/multiselect';
import { ContextMenuModule } from '@nanitor/primeng/contextmenu';
import { ToastModule } from '@nanitor/primeng/toast';
import { ButtonModule } from '@nanitor/primeng/button';
import { CalendarModule } from '@nanitor/primeng/calendar';
import { DialogModule } from '@nanitor/primeng/dialog';
import { DropdownModule } from '@nanitor/primeng/dropdown';
import { InputTextModule } from '@nanitor/primeng/inputtext';
import { ProgressBarModule } from '@nanitor/primeng/progressbar';
import { TabViewModule } from '@nanitor/primeng/tabview';
import { CodeHighlighterModule } from '@nanitor/primeng/codehighlighter';

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
