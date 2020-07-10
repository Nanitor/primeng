import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicDialogModule} from '../../../components/dynamicdialog/dynamicdialog';
import {DynamicDialogDemo} from './dynamicdialogdemo';
import {DynamicDialogDemoRoutingModule} from './dynamicdialogdemo-routing.module';
import {CarsListDemo} from './carslistdemo';
import {ToastModule} from '@nanitor/primeng/toast';
import {TableModule} from '@nanitor/primeng/table';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		DynamicDialogDemoRoutingModule,
		DynamicDialogModule,
		ToastModule,
		TableModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DynamicDialogDemo,
		CarsListDemo
	],
	entryComponents: [
		CarsListDemo
	]
})
export class DynamicDialogDemoModule {}
