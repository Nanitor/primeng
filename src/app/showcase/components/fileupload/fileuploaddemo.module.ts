import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadDemo} from './fileuploaddemo';
import {FileUploadDemoRoutingModule} from './fileuploaddemo-routing.module';
import {FileUploadModule} from '@nanitor/primeng/fileupload';
import {ToastModule} from '@nanitor/primeng/toast';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		FileUploadDemoRoutingModule,
        FileUploadModule,
        ToastModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		FileUploadDemo
	]
})
export class FileUploadDemoModule {}
