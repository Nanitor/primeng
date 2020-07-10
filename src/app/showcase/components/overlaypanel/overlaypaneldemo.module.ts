import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayPanelDemo} from './overlaypaneldemo';
import {OverlayPanelDemoRoutingModule} from './overlaypaneldemo-routing.module';
import {OverlayPanelModule} from '@nanitor/primeng/overlaypanel';
import {ButtonModule} from '@nanitor/primeng/button';
import {TableModule} from '@nanitor/primeng/table';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		OverlayPanelDemoRoutingModule,
        OverlayPanelModule,
        ButtonModule,
        TableModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		OverlayPanelDemo
	]
})
export class OverlayPanelDemoModule {}
