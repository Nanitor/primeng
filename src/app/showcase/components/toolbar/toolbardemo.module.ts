import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDemo} from './toolbardemo';
import {ToolbarDemoRoutingModule} from './toolbardemo-routing.module';
import {ToolbarModule} from '@nanitor/primeng/toolbar';
import {ButtonModule} from '@nanitor/primeng/button';
import {SplitButtonModule} from '@nanitor/primeng/splitbutton';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ToolbarDemoRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ToolbarDemo
	]
})
export class ToolbarDemoModule {}
