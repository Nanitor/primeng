import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDemo} from './tooltipdemo';
import {TooltipDemoRoutingModule} from './tooltipdemo-routing.module';
import {TooltipModule} from '@nanitor/primeng/tooltip';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		TooltipDemoRoutingModule,
        TooltipModule,
        InputTextModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		TooltipDemo
	]
})
export class TooltipDemoModule {}
