import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleriaDemoRoutingModule} from './galleriademo-routing.module';
import {GalleriaModule} from '@nanitor/primeng/galleria';
import {TabViewModule} from '@nanitor/primeng/tabview';
import {ButtonModule} from '@nanitor/primeng/button';
import {CodeHighlighterModule} from '@nanitor/primeng/codehighlighter';

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
