import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputSwitchDemo} from './inputswitchdemo';
import {InputSwitchDemoRoutingModule} from './inputswitchdemo-routing.module';
import {InputSwitchModule} from '@nanitor/primeng/inputswitch';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		InputSwitchDemoRoutingModule,
        InputSwitchModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		InputSwitchDemo
	]
})
export class InputSwitchDemoModule {}
