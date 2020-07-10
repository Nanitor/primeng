import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RTLDemo} from './rtldemo';
import {RTLDemoRoutingModule} from './rtldemo-routing.module';
import {DialogModule} from '@nanitor/primeng/dialog';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {ButtonModule} from '@nanitor/primeng/button';
import {AccordionModule} from '@nanitor/primeng/accordion';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		RTLDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		RTLDemo
	]
})
export class RTLDemoModule {}
