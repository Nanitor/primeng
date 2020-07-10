import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {ColorPickerDemo} from './colorpickerdemo';
import {ColorPickerDemoRoutingModule} from './colorpickerdemo-routing.module';
import {ColorPickerModule} from '@nanitor/primeng/colorpicker';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ColorPickerDemoRoutingModule,
        ColorPickerModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ColorPickerDemo
	]
})
export class ColorPickerDemoModule {}
