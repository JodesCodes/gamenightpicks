import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableFormComponent } from './table-form/table-form.component';
import { SliderFormatComponent } from './slider-format/slider-format.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableFormComponent,
    SliderFormatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  entryComponents: [ TableFormComponent ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
