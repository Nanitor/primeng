import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogDemo} from './confirmdialogdemo';
import {ConfirmDialogDemoRoutingModule} from './confirmdialogdemo-routing.module';
import {ConfirmDialogModule} from '@nanitor/primeng/confirmdialog';
import {ButtonModule} from '@nanitor/primeng/button';
import {MessagesModule} from '@nanitor/primeng/messages';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ConfirmDialogDemoRoutingModule,
        ConfirmDialogModule,
        ButtonModule,
        MessagesModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ConfirmDialogDemo
	]
})
export class ConfirmDialogDemoModule {}
