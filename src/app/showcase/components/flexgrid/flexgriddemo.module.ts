import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexGridDemo} from './flexgriddemo';
import {FlexGridDemoRoutingModule} from './flexgriddemo-routing.module';
import {PanelModule} from 'primeng_atretiak/panel';
import {ButtonModule} from 'primeng_atretiak/button';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

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
