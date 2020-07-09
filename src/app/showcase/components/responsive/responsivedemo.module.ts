import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ResponsiveDemo} from './responsivedemo';
import {ResponsiveDemoRoutingModule} from './responsivedemo-routing.module';
import {InputTextModule} from 'primeng_atretiak/inputtext';
import {InputTextareaModule} from 'primeng_atretiak/inputtextarea';
import {CalendarModule} from 'primeng_atretiak/calendar';
import {AutoCompleteModule} from 'primeng_atretiak/autocomplete';
import {ButtonModule} from 'primeng_atretiak/button';
import {SplitButtonModule} from 'primeng_atretiak/splitbutton';
import {DropdownModule} from 'primeng_atretiak/dropdown';
import {PasswordModule} from 'primeng_atretiak/password';
import {ListboxModule} from 'primeng_atretiak/listbox';
import {RadioButtonModule} from 'primeng_atretiak/radiobutton';
import {DialogModule} from 'primeng_atretiak/dialog';
import {PanelModule} from 'primeng_atretiak/panel';
import {TableModule} from 'primeng_atretiak/table';
import {CarouselModule} from 'primeng_atretiak/carousel';
import {OrderListModule} from 'primeng_atretiak/orderlist';
import {PickListModule} from 'primeng_atretiak/picklist';
import {MenuModule} from 'primeng_atretiak/menu';
import {PanelMenuModule} from 'primeng_atretiak/panelmenu';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {TreeModule} from 'primeng_atretiak/tree';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

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
