import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollPanelDemo} from './scrollpaneldemo';
import {ScrollPanelModule} from '@nanitor/primeng/scrollpanel';
import {ScrollPanelDemoRoutingModule} from './scrollpaneldemo-routing.module';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ScrollPanelModule,
		ScrollPanelDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ScrollPanelDemo
	]
})
export class ScrollPanelDemoModule {}
