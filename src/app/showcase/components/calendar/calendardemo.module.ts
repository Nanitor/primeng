import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {CalendarDemo} from './calendardemo';
import {CalendarDemoRoutingModule} from './calendardemo-routing.module';
import {CalendarModule} from '@nanitor/primeng/calendar';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		CalendarDemoRoutingModule,
        CalendarModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CalendarDemo
	]
})
export class CalendarDemoModule {}
