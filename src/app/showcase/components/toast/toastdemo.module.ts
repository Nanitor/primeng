import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastDemo} from './toastdemo';
import {ToastDemoRoutingModule} from './toastdemo-routing.module';
import {ToastModule} from '@nanitor/primeng/toast';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ToastDemoRoutingModule,
        ToastModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ToastDemo
	]
})
export class ToastDemoModule {}
