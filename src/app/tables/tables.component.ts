import { Component } from '@angular/core';

import {Table } from '../models/table';
import { TableStatus } from '../models/TableStatus';

 const tablesData: Table[] = [
   {Title: 'Evolution', MaxPlayers: 6, PlayTime: '60 Minutes', Status: TableStatus.Open, Players: [
      {UserName: 'JodesCodes', FirstName: 'Jody', LastName: 'Wells', BggUserName: 'Jodes'},
      {UserName: 'SkyEE', FirstName: 'Skye', LastName: 'Griffin', BggUserName: ''},
      {UserName: 'akaBaker', FirstName: 'Luke', LastName: 'Baker', BggUserName: ''},
      {UserName: 'ChaoticNeutral', FirstName: 'Mal', LastName: 'Ensor', BggUserName: ''}]},
   {Title: 'Underwater Cities', MaxPlayers: 4, PlayTime: '80-150 Minutes', Status: TableStatus.Full, Players: [
      {UserName: 'WickDawg', FirstName: 'Adam', LastName: 'Wickham', BggUserName: ''},
      {UserName: 'MasteroftheBoards', FirstName: 'John', LastName: 'Meyer', BggUserName: 'masteroftheboards'},
      {UserName: 'styles', FirstName: 'David', LastName: 'Hansen', BggUserName: ''},
      {UserName: 'bschirm', FirstName: 'Ben', LastName: 'Schirmer', BggUserName: ''}]},
   {Title: 'Quodd Heroes', MaxPlayers: 5, PlayTime: '30-90 Minutes', Status: TableStatus.Open, Players: [
      {UserName: 'kstoll1087', FirstName: 'Kevin', LastName: 'Stoll', BggUserName: ''},
      {UserName: 'MaturinYDomonova', FirstName: 'Brett', LastName: 'Gilbert', BggUserName: ''}]}
];

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
