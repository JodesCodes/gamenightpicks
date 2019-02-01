import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule, MatSelectModule, MatDialogModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { TableFormComponent } from './table-form/table-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  entryComponents: [ TableFormComponent ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
