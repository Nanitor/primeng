import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordDemo} from './passworddemo';
import {PasswordDemoRoutingModule} from './passworddemo-routing.module';
import {PasswordModule} from '@nanitor/primeng/password';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		PasswordDemoRoutingModule,
        PasswordModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		PasswordDemo
	]
})
export class PasswordDemoModule {}
