import { Injectable } from '@angular/core';
import { Table } from '../models/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TablemakerService {

  constructor(private http: HttpClient) { }

  createTable(tableName: string): Table {
    const newTable = new Table();
    newTable.title = tableName;
    newTable.keywords = ['Worker Placement', 'Modular', 'Set Collection'];
    newTable.maxPlayers = 4;
    newTable.playTimeMin = 30;
    newTable.playTimeMax = 120;

    return newTable;
    }
}
