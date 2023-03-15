import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FloatingCardComponent } from './card/floating-card.component';
import { SimpleCardComponent } from './card/simple-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SimpleCardComponent,
    FloatingCardComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
