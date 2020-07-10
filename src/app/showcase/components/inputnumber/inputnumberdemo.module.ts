import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputNumberDemo} from './inputnumberdemo';
import {InputNumberDemoRoutingModule} from './inputnumberdemo-routing.module';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';
import { InputNumberModule } from 'src/app/components/public_api';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		InputNumberDemoRoutingModule,
        InputNumberModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputNumberDemo
	]
})
export class InputNumberDemoModule {}
