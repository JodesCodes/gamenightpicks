import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Table } from '../models/table';
import { TableFormComponent } from '../table-form/table-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  constructor(private dialog: MatDialog) {}

  createTable(tableToCreate: Table): Table {
    // Ask about const here.
    const newTable = new Table();
    newTable.title = tableToCreate.title;
    newTable.keywords = tableToCreate.keywords;
    newTable.maxPlayers = tableToCreate.maxPlayers;
    newTable.playTimeMin = tableToCreate.playTimeMin;
    newTable.playTimeMax = tableToCreate.playTimeMax;

    return newTable;
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '500px';
    dialogConfig.width = '400px';

    this.dialog.open(TableFormComponent, dialogConfig);
  }
}
