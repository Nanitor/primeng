import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {RatingDemo} from './ratingdemo';
import {RatingDemoRoutingModule} from './ratingdemo-routing.module';
import {RatingModule} from '@nanitor/primeng/rating';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		RatingDemoRoutingModule,
        RatingModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		RatingDemo
	]
})
export class RatingDemoModule {}
