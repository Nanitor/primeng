import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SelectButtonDemo} from './selectbuttondemo';
import {SelectButtonDemoRoutingModule} from './selectbuttondemo-routing.module';
import {SelectButtonModule} from '@nanitor/primeng/selectbutton';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		SelectButtonDemoRoutingModule,
        FormsModule,
        SelectButtonModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SelectButtonDemo
	]
})
export class SelectButtonDemoModule {}
