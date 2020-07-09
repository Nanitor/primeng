import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightboxDemo} from './lightboxdemo';
import {LightboxDemoRoutingModule} from './lightboxdemo-routing.module';
import {LightboxModule} from 'primeng_atretiak/lightbox';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		LightboxDemoRoutingModule,
        LightboxModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		LightboxDemo
	]
})
export class LightboxDemoModule {}
