import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortePipe } from './sorte.pipe';
import { WeinComponent } from './wein/wein.component';
import { ButtonHoverDirective } from './button-hover.directive';
import { URL_TOKEN } from './weinApi';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SortePipe,
    WeinComponent,
    ButtonHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: URL_TOKEN, useValue: 'http://localhost:3000/wein/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
