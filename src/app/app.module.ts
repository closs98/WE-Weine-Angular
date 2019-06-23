import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortePipe } from './sorte.pipe';
import { WeinComponent } from './wein/wein.component';
import { ButtonHoverDirective } from './button-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    SortePipe,
    WeinComponent,
    ButtonHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
