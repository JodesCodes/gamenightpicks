import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Table } from '../models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent {

  constructor(public dialog: MatDialog) {}

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
    const dialogRef = this.dialog.open(TableFormComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-table-form',
  templateUrl: 'template-form.html'
})

export class TableFormComponent {}

