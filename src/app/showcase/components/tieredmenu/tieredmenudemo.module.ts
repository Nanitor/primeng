import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TieredMenuDemo} from './tieredmenudemo';
import {TieredMenuDemoRoutingModule} from './tieredmenudemo-routing.module';
import {TieredMenuModule} from '@nanitor/primeng/tieredmenu';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		TieredMenuDemoRoutingModule,
        TieredMenuModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TieredMenuDemo
	]
})
export class TieredMenuDemoModule {}
