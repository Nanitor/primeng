import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SidebarDemo} from './sidebardemo';
import {SidebarDemoRoutingModule} from './sidebardemo-routing.module';
import {SidebarModule} from '@nanitor/primeng/sidebar';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		SidebarDemoRoutingModule,
        FormsModule,
        SidebarModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SidebarDemo
	]
})
export class SidebarDemoModule {}
