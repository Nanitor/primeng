import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ResponsiveDemo} from './responsivedemo';
import {ResponsiveDemoRoutingModule} from './responsivedemo-routing.module';
import {InputTextModule} from '@nanitor/primeng/inputtext';
import {InputTextareaModule} from '@nanitor/primeng/inputtextarea';
import {CalendarModule} from '@nanitor/primeng/calendar';
import {AutoCompleteModule} from '@nanitor/primeng/autocomplete';
import {ButtonModule} from '@nanitor/primeng/button';
import {SplitButtonModule} from '@nanitor/primeng/splitbutton';
import {DropdownModule} from '@nanitor/primeng/dropdown';
import {PasswordModule} from '@nanitor/primeng/password';
import {ListboxModule} from '@nanitor/primeng/listbox';
import {RadioButtonModule} from '@nanitor/primeng/radiobutton';
import {DialogModule} from '@nanitor/primeng/dialog';
import {PanelModule} from '@nanitor/primeng/panel';
import {TableModule} from '@nanitor/primeng/table';
import {CarouselModule} from '@nanitor/primeng/carousel';
import {OrderListModule} from '@nanitor/primeng/orderlist';
import {PickListModule} from '@nanitor/primeng/picklist';
import {MenuModule} from '@nanitor/primeng/menu';
import {PanelMenuModule} from '@nanitor/primeng/panelmenu';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {TreeModule} from '@nanitor/primeng/tree';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ResponsiveDemoRoutingModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        AutoCompleteModule,
        SplitButtonModule,
        ButtonModule,
        PasswordModule,
        DropdownModule,
        ListboxModule,
        RadioButtonModule,
        DialogModule,
        PanelModule,
        TableModule,
        CarouselModule,
        OrderListModule,
        PickListModule,
        MenuModule,
        PanelMenuModule,
        TreeModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ResponsiveDemo
	]
})
export class ResponsiveDemoModule {}
