import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {TreeDemo} from './treedemo';
import {TreeTemplatingDemo} from './treetemplatingdemo';
import {TreeSelectionDemo} from './treeselectiondemo';
import {TreeFilterDemo} from './treefilterdemo';
import {TreeScrollDemo} from './treescrolldemo';
import {TreeLazyDemo} from './treelazydemo';
import {TreeContextMenuDemo} from './treecontextmenudemo';
import {TreeDragDropDemo} from './treedragdropdemo';
import {TreeHorizontalDemo} from './treehorizontaldemo';
import {TreeDemoRoutingModule} from './treedemo-routing.module';
import {TreeModule} from 'primeng_atretiak/tree';
import {ToastModule} from 'primeng_atretiak/toast';
import {ButtonModule} from 'primeng_atretiak/button';
import {DialogModule} from 'primeng_atretiak/dialog';
import {ContextMenuModule} from 'primeng_atretiak/contextmenu';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TreeDemoRoutingModule,
        TreeModule,
        ToastModule,
        ButtonModule,
        DialogModule,
        ContextMenuModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
        TreeDemo,
        TreeTemplatingDemo,
        TreeSelectionDemo,
        TreeFilterDemo,
        TreeLazyDemo,
        TreeScrollDemo,
        TreeContextMenuDemo,
        TreeDragDropDemo,
        TreeHorizontalDemo
	]
})
export class TreeDemoModule {}
