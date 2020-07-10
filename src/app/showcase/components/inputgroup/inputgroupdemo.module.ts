import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputGroupDemo} from './inputgroupdemo';
import {InputGroupDemoRoutingModule} from './inputgroupdemo-routing.module';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {CheckboxModule} from '@nanitor/primeng/checkbox';
import {RadioButtonModule} from '@nanitor/primeng/radiobutton';
import {ButtonModule} from '@nanitor/primeng/button';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		InputGroupDemoRoutingModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        CheckboxModule,
        RadioButtonModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputGroupDemo
	]
})
export class InputGroupDemoModule {}
