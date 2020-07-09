import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockUIDemo} from './blockuidemo';
import {BlockUIDemoRoutingModule} from './blockuidemo-routing.module';
import {BlockUIModule} from 'primeng_atretiak/blockui';
import {ButtonModule} from 'primeng_atretiak/button';
import {PanelModule} from 'primeng_atretiak/panel';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

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
