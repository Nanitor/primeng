import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockUIDemo} from './blockuidemo';
import {BlockUIDemoRoutingModule} from './blockuidemo-routing.module';
import {BlockUIModule} from '@nanitor/primeng/blockui';
import {ButtonModule} from '@nanitor/primeng/button';
import {PanelModule} from '@nanitor/primeng/panel';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		BlockUIDemoRoutingModule,
        BlockUIModule,
        ButtonModule,
        PanelModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		BlockUIDemo
	]
})
export class BlockUIDemoModule {}
