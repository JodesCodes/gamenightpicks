import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartPageComponent } from './startpage.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
