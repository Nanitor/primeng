import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {FormsModule}  from '@angular/forms';;
import {SpinnerDemo} from './spinnerdemo';
import {SpinnerDemoRoutingModule} from './spinnerdemo-routing.module';
import {SpinnerModule} from 'primeng_atretiak/spinner';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		SpinnerDemoRoutingModule,
        SpinnerModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		SpinnerDemo
	]
})
export class SpinnerDemoModule {}
