import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TerminalDemo} from './terminaldemo';
import {TerminalDemoRoutingModule} from './terminaldemo-routing.module';
import {TerminalModule} from '@nanitor/primeng/terminal';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
