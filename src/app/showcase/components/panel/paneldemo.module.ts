import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelDemo} from './paneldemo';
import {PanelDemoRoutingModule} from './paneldemo-routing.module';
import {PanelModule} from 'primeng_atretiak/panel';
import {ToastModule} from 'primeng_atretiak/toast';
import {SplitButtonModule} from 'primeng_atretiak/splitbutton';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		PanelDemoRoutingModule,
        PanelModule,
        ToastModule,
        SplitButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		PanelDemo
	]
})
export class PanelDemoModule {}
