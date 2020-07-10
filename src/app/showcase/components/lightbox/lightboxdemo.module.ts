import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LightboxDemo} from './lightboxdemo';
import {LightboxDemoRoutingModule} from './lightboxdemo-routing.module';
import {LightboxModule} from '@nanitor/primeng/lightbox';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
