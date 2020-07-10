import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EditorDemo} from './editordemo';
import {EditorDemoRoutingModule} from './editordemo-routing.module';
import {EditorModule} from '@nanitor/primeng/editor';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		EditorDemoRoutingModule,
        EditorModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		EditorDemo
	]
})
export class EditorDemoModule {}
