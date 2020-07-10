import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DropdownDemo} from './dropdowndemo';
import {DropdownDemoRoutingModule} from './dropdowndemo-routing.module';
import {DropdownModule} from '@nanitor/primeng/dropdown';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		DropdownDemoRoutingModule,
        DropdownModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DropdownDemo
	]
})
export class DropdownDemoModule {}
