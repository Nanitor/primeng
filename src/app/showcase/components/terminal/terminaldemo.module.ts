import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TerminalDemo} from './terminaldemo';
import {TerminalDemoRoutingModule} from './terminaldemo-routing.module';
import {TerminalModule} from 'primeng_atretiak/terminal';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		TerminalDemoRoutingModule,
        TerminalModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TerminalDemo
	]
})
export class TerminalDemoModule {}
