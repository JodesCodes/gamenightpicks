import { Component } from '@angular/core';
import {Table } from '../models/table';
import { TableStatus } from '../models/tablestatus';

 const tablesData: Table[] = [
   {Title: "Evolution", MaxPlayers: 6, PlayTime: "60 Minutes", Status: TableStatus.Open, Players: [{FirstName: "Jody", LastName: "Wells", BggUserName: "Jodes"},{FirstName: "Skye", LastName: "Griffin", BggUserName: ""},{FirstName: "Luke", LastName: "Baker", BggUserName: ""},{FirstName: "Mal", LastName: "Ensor", BggUserName: ""}]},
   {Title: "Underwater Cities", MaxPlayers: 4, PlayTime: "80-150 Minutes", Status: TableStatus.Full, Players: [{FirstName: "Adam", LastName: "Wickham", BggUserName: ""},{FirstName: "John", LastName: "Meyer", BggUserName: "masteroftheboards"},{FirstName: "David", LastName: "Hansen", BggUserName: ""},{FirstName: "Ben", LastName: "Schirmer", BggUserName: ""}]},
   {Title: "Quodd Heroes", MaxPlayers: 5, PlayTime: "30-90 Minutes", Status: TableStatus.Open, Players: [{FirstName: "Kevin", LastName: "Stoll", BggUserName: ""},{FirstName: "Brett", LastName: "Gilbert", BggUserName: ""}]},

 ]

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  tables: Table[];

  constructor() {
    this.tables = tablesData;
   }

  displayedColumns: string[] = ['Title', 'MaxPlayers', 'PlayTime', 'Players', 'Status'];
}
