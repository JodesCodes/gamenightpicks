import { Component } from '@angular/core';
import { hammerjs } from 'hammerjs';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.sass']
})
export class TableFormComponent {

  formatLabel(playTime: number | null) {
    if (!playTime) {
      return 0;
    }
      return playTime + 'minutes';
  }
}
