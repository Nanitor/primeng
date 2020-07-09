import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleriaDemoRoutingModule} from './galleriademo-routing.module';
import {GalleriaModule} from 'primeng_atretiak/galleria';
import {TabViewModule} from 'primeng_atretiak/tabview';
import {ButtonModule} from 'primeng_atretiak/button';
import {CodeHighlighterModule} from 'primeng_atretiak/codehighlighter';

import {GalleriaDemo} from './galleriademo';
import {GalleriaProgrammaticDemo} from './galleriaprogrammaticdemo';
import {GalleriaIndicatorDemo} from './galleriaindicatordemo';
import {GalleriaThumbnailDemo} from './galleriathumbnaildemo';
import {GalleriaNavigatorDemo} from './gallerianavigatordemo';
import {GalleriaResponsiveDemo} from './galleriaresponsivedemo';
import {GalleriaFullscreenDemo} from './galleriafullscreendemo';
import {GalleriaAutoPlayDemo} from './galleriaautoplaydemo';
import {GalleriaCaptionDemo} from './galleriacaptiondemo';
import {GalleriaAdvancedDemo} from './galleriaadvanceddemo';

@NgModule({
	imports: [
		CommonModule,
		GalleriaDemoRoutingModule,
        GalleriaModule,
        TabViewModule,
		CodeHighlighterModule,
		ButtonModule
	],
	declarations: [
		GalleriaDemo,
		GalleriaProgrammaticDemo,
		GalleriaIndicatorDemo,
		GalleriaThumbnailDemo,
		GalleriaNavigatorDemo,
		GalleriaResponsiveDemo,
		GalleriaFullscreenDemo,
		GalleriaAutoPlayDemo,
		GalleriaCaptionDemo,
		GalleriaAdvancedDemo
	]
})
export class GalleriaDemoModule {}
