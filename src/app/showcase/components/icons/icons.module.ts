import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { IconsRoutingModule } from './icons-routing.module';
import { InputTextModule } from '@nanitor/primeng/inputtext';
import { CodeHighlighterModule } from '@nanitor/primeng/codehighlighter';

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