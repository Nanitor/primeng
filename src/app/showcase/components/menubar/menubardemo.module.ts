import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarDemo} from './menubardemo';
import {MenubarDemoRoutingModule} from './menubardemo-routing.module';
import {MenubarModule} from '@nanitor/primeng/menubar';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		MenubarDemoRoutingModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		MenubarDemo
	]
})
export class MenubarDemoModule {}
