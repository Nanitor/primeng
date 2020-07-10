import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitButtonDemo} from './splitbuttondemo';
import {SplitButtonDemoRoutingModule} from './splitbuttondemo-routing.module';
import {SplitButtonModule} from '@nanitor/primeng/splitbutton';
import {ToastModule} from '@nanitor/primeng/toast';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		SplitButtonDemoRoutingModule,
        SplitButtonModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SplitButtonDemo
	]
})
export class SplitButtonDemoModule {}
