import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDemo} from './menudemo';
import {MenuDemoRoutingModule} from './menudemo-routing.module';
import {MenuModule} from '@nanitor/primeng/menu'
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		MenuDemoRoutingModule,
        MenuModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		MenuDemo
	]
})
export class MenuDemoModule {}
