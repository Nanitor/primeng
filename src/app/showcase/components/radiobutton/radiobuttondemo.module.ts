import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RadioButtonDemo} from './radiobuttondemo';
import {RadioButtonDemoRoutingModule} from './radiobuttondemo-routing.module';
import {RadioButtonModule} from '@nanitor/primeng/radiobutton';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		RadioButtonDemoRoutingModule,
        RadioButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		RadioButtonDemo
	]
})
export class RadioButtonDemoModule {}
