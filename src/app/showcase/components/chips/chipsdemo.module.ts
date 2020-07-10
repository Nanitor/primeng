import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChipsDemo} from './chipsdemo';
import {ChipsDemoRoutingModule} from './chipsdemo-routing.module';
import {ChipsModule} from '@nanitor/primeng/chips';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ChipsDemoRoutingModule,
        ChipsModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ChipsDemo
	]
})
export class ChipsDemoModule {}
