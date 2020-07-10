import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {VirtualScrollerDemo} from './virtualscrollerdemo';
import {VirtualScrollerDemoRoutingModule} from './virtualscrollerdemo-routing.module';
import {VirtualScrollerModule} from '@nanitor/primeng/virtualscroller';
import {ButtonModule} from '@nanitor/primeng/button';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {DropdownModule} from '@nanitor/primeng/dropdown';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		VirtualScrollerDemoRoutingModule,
        VirtualScrollerModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		VirtualScrollerDemo
	]
})
export class VirtualScrollerDemoModule {}
