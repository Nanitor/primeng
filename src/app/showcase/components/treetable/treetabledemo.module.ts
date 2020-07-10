import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeTableDemo } from './treetabledemo';
import { TreeTableDemoRoutingModule } from './treetabledemo-routing.module';
import { TreeTableModule } from '@nanitor/primeng/treetable';
import { TreeTablePageDemo } from './treetablepagedemo';
import { TreeTableSortDemo } from './treetablesortdemo';
import { TreeTableSelectionDemo } from './treetableselectiondemo';
import { TreeTableSectionsDemo } from './treetablesectionsdemo';
import { TreeTableStyleDemo } from './treetablestyledemo';
import { TreeTableLazyDemo } from './treetablelazydemo';
import { TreeTableColGroupDemo } from './treetablecolgroupdemo';
import { TreeTableScrollDemo } from './treetablescrolldemo';
import { TreeTableFlexScrollDemo } from './treetableflexscrolldemo';
import { TreeTableColToggleDemo } from './treetablecoltoggledemo';
import { TreeTableResponsiveDemo } from './treetableresponsivedemo';
import { TreeTableContextMenuDemo } from './treetablecontextmenudemo';
import { TreeTableColResizeDemo } from './treetablecolresizedemo';
import { TreeTableReorderDemo } from './treetablereorderdemo';
import { TreeTableEditDemo } from './treetableeditdemo';
import { TreeTableFilterDemo } from './treetablefilterdemo';
import { ToastModule } from '@nanitor/primeng/toast';
import { DialogModule } from '@nanitor/primeng/dialog';
import { ButtonModule } from '@nanitor/primeng/button';
import { TabViewModule } from '@nanitor/primeng/tabview';
import { MultiSelectModule } from '@nanitor/primeng/multiselect';
import { InputTextModule } from '@nanitor/primeng/inputtext';
import { ContextMenuModule } from '@nanitor/primeng/contextmenu';
import { CodeHighlighterModule } from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TreeTableDemoRoutingModule,
        TreeTableModule,
        ToastModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        MultiSelectModule,
        InputTextModule,
        ContextMenuModule,
        CodeHighlighterModule
	],
	declarations: [
        TreeTableDemo,
        TreeTablePageDemo,
        TreeTableSortDemo,
        TreeTableSelectionDemo,
        TreeTableSectionsDemo,
        TreeTableStyleDemo,
        TreeTableLazyDemo,
        TreeTableColGroupDemo,
        TreeTableScrollDemo,
        TreeTableFlexScrollDemo,
        TreeTableColToggleDemo,
        TreeTableResponsiveDemo,
        TreeTableContextMenuDemo,
        TreeTableColResizeDemo,
        TreeTableReorderDemo,
        TreeTableEditDemo,
        TreeTableFilterDemo
	]
})
export class TreeTableDemoModule {}
