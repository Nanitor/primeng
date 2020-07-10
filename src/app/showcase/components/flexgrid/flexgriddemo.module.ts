import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexGridDemo} from './flexgriddemo';
import {FlexGridDemoRoutingModule} from './flexgriddemo-routing.module';
import {PanelModule} from '@nanitor/primeng/panel';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
        CommonModule,
        ButtonModule,
        PanelModule,
		FlexGridDemoRoutingModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		FlexGridDemo
	]
})
export class FlexGridDemoModule {}
