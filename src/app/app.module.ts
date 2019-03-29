import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule, MatSelectModule, MatDialogModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableFormComponent } from './table-form/table-form.component';
import { DisplayedTablesPipe } from './displayed-tables.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayedTablesPipe,
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
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTableModule
  ],
  entryComponents: [ TableFormComponent ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule { }
