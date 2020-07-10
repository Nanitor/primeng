import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationChartDemo} from './organizationchartdemo';
import {OrganizationChartDemoRoutingModule} from './organizationchartdemo-routing.module';
import {OrganizationChartModule} from '@nanitor/primeng/organizationchart';
import {ToastModule} from '@nanitor/primeng/toast';
import {PanelModule} from '@nanitor/primeng/panel';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		OrganizationChartDemoRoutingModule,
        OrganizationChartModule,
        ToastModule,
        PanelModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		OrganizationChartDemo
	]
})
export class OrganizationChartDemoModule {}
