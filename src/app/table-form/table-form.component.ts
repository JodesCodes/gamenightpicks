import { Component } from '@angular/core';

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

}
