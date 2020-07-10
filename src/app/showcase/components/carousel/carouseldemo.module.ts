import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselDemo} from './carouseldemo';
import {CarouselDemoRoutingModule} from './carouseldemo-routing.module';
import {CarouselModule} from '@nanitor/primeng/carousel';
import {ButtonModule} from '@nanitor/primeng/button';
import {ToastModule} from '@nanitor/primeng/toast';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        CarouselDemoRoutingModule,
        CarouselModule,
        ButtonModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		CarouselDemo
	]
})
export class CarouselDemoModule {}
