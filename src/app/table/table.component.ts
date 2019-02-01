import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TableFormComponent } from '../table-form/table-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = 'auto';
    dialogConfig.width = '400px';

    this.dialog.open(TableFormComponent, dialogConfig);
  }
}

