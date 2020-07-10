import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {AutoCompleteDemo} from './autocompletedemo';
import {AutoCompleteDemoRoutingModule} from './autocompletedemo-routing.module';
import {AutoCompleteModule} from '@nanitor/primeng/autocomplete';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		AutoCompleteDemoRoutingModule,
        AutoCompleteModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		AutoCompleteDemo
	]
})
export class AutoCompleteDemoModule {}
