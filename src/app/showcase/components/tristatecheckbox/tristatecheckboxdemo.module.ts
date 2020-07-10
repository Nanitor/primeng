import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TriStateCheckboxDemo} from './tristatecheckboxdemo';
import {TriStateCheckboxDemoRoutingModule} from './tristatecheckboxdemo-routing.module';
import {TriStateCheckboxModule} from '@nanitor/primeng/tristatecheckbox';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TriStateCheckboxDemoRoutingModule,
        TriStateCheckboxModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TriStateCheckboxDemo
	]
})
export class TriStateCheckboxDemoModule {}
