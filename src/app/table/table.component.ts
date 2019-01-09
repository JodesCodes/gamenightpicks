import { Component, OnInit } from '@angular/core';
import { TablemakerService } from '../tablemaker.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  constructor(private tablemakerService: TablemakerService) { }

  ngOnInit() {
  }

}
