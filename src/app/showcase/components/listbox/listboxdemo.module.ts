import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ListboxDemo} from './listboxdemo';
import {ListboxDemoRoutingModule} from './listboxdemo-routing.module';
import {ListboxModule} from '@nanitor/primeng/listbox';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ListboxDemoRoutingModule,
        ListboxModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ListboxDemo
	]
})
export class ListboxDemoModule {}
