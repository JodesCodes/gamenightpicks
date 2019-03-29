import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Table } from '../app/models/table';
import { TableStatus } from '../app/models/TableStatus';

export interface TestTable {
  Title: string;
  CurrentPlayers: number;
  MaxPlayers: number;
  AveragePlaytime: string;
  Status: string;
}

const TABLE_DATA: TestTable[] = [
  {Title: "A Feast for Odin", CurrentPlayers: 2, MaxPlayers: 4, AveragePlaytime: "180 Minutes", Status: "Open"},
  {Title: "Evolution", CurrentPlayers: 3, MaxPlayers: 6, AveragePlaytime: "80 Minutes", Status: "Open"}
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  displayedTestTables: string[] = ['Title', 'CurrentPlayers', 'MaxPlayers', 'AveragePlaytime', 'Status'];
  dataSource = new MatTableDataSource(TABLE_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  tables: Table[];
  tableFull: boolean = false;
  tableOpen: boolean = false;

  constructor() {
    this.onTableChanges();
  }

  onTableChanges() {
    this.toggleTableStatus(TableStatus.Full);
    this.toggleTableStatus(TableStatus.Open);
  }

  areAnyFiltersSeelcted() {
    return this.tableFull || this.tableOpen;
  }

  filter(status: string) {
    switch (status) {
      case TableStatus.Full:
        this.tableFull = !this.tableFull;
        break;
      case TableStatus.Open:
        this.tableOpen = !this.tableOpen;
        break;
    }
    this.toggleTableStatus(status);
  }

  toggleTableStatus(status: string) {
    if (this.tables != undefined) {
      this.tables.forEach(table => {
        if (status === TableStatus.Full && table[0].Status === TableStatus.Full) {
          table.Displayed = this.tableFull;
        }
        if (status === TableStatus.Open && table[0].Status === TableStatus.Open) {
          table.Displayed = this.tableOpen;
        }
      });
    }
  }

  sortTable(sort: MatSort) {
    const tables = this.tables;
    if (!sort.active || sort.direction === '') {
      this.tables = tables;
      return;
    }

    this.tables = tables.sort((a,b) => {
      const isAscending = sort.direction === 'asc';
      switch (sort.active) {
        case 'Game': return compare(a.Title, b.Title, isAscending);
        case 'MaxPlayers': return compare(a.MaxPlayers, b.MaxPlayers, isAscending);
        case 'AveragePlaytime': return compare(a.PlayTime, b.PlayTime, isAscending);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAscending) {
  return (a < b ? -1 : 1) * (isAscending ? 1: -1);
}