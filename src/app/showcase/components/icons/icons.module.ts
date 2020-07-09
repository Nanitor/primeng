import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { InputTextModule } from 'primeng_atretiak/inputtext';
import { CodeHighlighterModule } from 'primeng_atretiak/codehighlighter';

@NgModule({
    imports: [
        CommonModule,
        InputTextModule,
        CodeHighlighterModule,
        IconsRoutingModule
    ],
    declarations: [
        IconsComponent
    ]
})
export class IconsModule { }