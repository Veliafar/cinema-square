import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StructureModule } from 'structure/structure.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularEnumsListModule } from 'angular-enum-list';
import * as I18nextProvider from 'providers/i18next.provider';
import {
  I18NextModule,
  I18NextTitle
} from 'angular-i18next';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StructureModule,
    I18NextModule.forRoot(),
    AngularEnumsListModule.forRoot('enums')

  ],
  providers: [
    I18nextProvider.I18N_PROVIDERS,
        {
            provide: Title,
            useClass: I18NextTitle
        },
        {
            provide: LOCALE_ID,
            useValue: 'en-US',
        }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
