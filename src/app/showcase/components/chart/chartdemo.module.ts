import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartDemoRoutingModule} from './chartdemo-routing.module';
import {ChartDemo} from './chartdemo';
import {PieChartDemo} from './piechart/piechartdemo';
import {DoughnutChartDemo} from './doughnutchart/doughnutchartdemo';
import {BarChartDemo} from './barchart/barchartdemo';
import {LineChartDemo} from './linechart/linechartdemo';
import {PolarAreaChartDemo} from './polarareachart/polarareachartdemo';
import {RadarChartDemo} from './radarchart/radarchartdemo';
import {ChartModule} from 'primeng_atretiak/chart';
import {ToastModule} from 'primeng_atretiak/toast';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
		ChartDemoRoutingModule,
        ChartModule,
        ToastModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		ChartDemo,
        PieChartDemo,
        DoughnutChartDemo,
        BarChartDemo,
        LineChartDemo,
        PolarAreaChartDemo,
        RadarChartDemo
	]
})
export class ChartDemoModule {}
