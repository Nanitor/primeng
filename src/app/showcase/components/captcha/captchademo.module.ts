import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaptchaDemo} from './captchademo';
import {CaptchaDemoRoutingModule} from './captchademo-routing.module';
import {CaptchaModule} from '@nanitor/primeng/captcha';
import {ToastModule} from '@nanitor/primeng/toast';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		CaptchaDemoRoutingModule,
        CaptchaModule,
        TabViewModule,
        ToastModule,
        CodeHighlighterModule
	],
	declarations: [
		CaptchaDemo
	]
})
export class CaptchaDemoModule {}
