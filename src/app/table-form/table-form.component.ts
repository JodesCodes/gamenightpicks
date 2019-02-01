import { Component } from '@angular/core';
import { Table } from '../models/table';

export interface PlayTimes {
  time: string;
}

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})

export class TableFormComponent {
  playTimes: PlayTimes[] = [
    {time: '30 minutes'},
    {time: '1 hour'},
    {time: '1 1/2 hours'},
    {time: '2 hours'},
    {time: '2 1/2 hours'},
    {time: '3 hours'},
    {time: '3+ hours'}];

  newTable: Table;

  constructor() {
    this.newTable = new Table();
  }

  addTable() {
    this.buildTable(this.newTable);
    console.log(this.newTable);
  }

  buildTable(table: Table) {
    const tableList = document.getElementById('tables');
    const li = document.createElement('li');
    li.textContent = this.newTable.title;
    tableList.appendChild(li);
  }
}
