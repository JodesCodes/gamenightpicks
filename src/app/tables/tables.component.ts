import { Component, OnInit } from '@angular/core';
import { Table } from '../models/Table';
import { Player } from '../models/Player';
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

const newPlayer: Player = {
  FirstName: 'New',
  LastName: 'Player',
  UserName: 'NewPlayer1980',
  BggUserName: 'nueplayer'
};

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {
  tables: Table[];
  activePlayer: Player;

  ngOnInit() {
    this.activePlayer = newPlayer;
    this.tables = tablesData;
  }

  AddPlayer(table: Table, player: Player) {
    player = newPlayer;
    table.Players.push(player);
  }

  RemovePlayer(table: Table, player: Player) {
    player = newPlayer;
    table.Players.splice(table.Players.indexOf(player), 1);
  }
}
