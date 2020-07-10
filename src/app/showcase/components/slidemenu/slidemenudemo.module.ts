import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideMenuDemo} from './slidemenudemo';
import {SlideMenuDemoRoutingModule} from './slidemenudemo-routing.module';
import {SlideMenuModule} from '@nanitor/primeng/slidemenu';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		SlideMenuDemoRoutingModule,
        SlideMenuModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SlideMenuDemo
	]
})
export class SlideMenuDemoModule {}
