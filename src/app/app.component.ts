import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Welcome to Game Night!';
  descriptionPart1 =  'Take a seat at one of the tables below.';
  descriptionPart2 =  'If nothing looks good to you, feel free to start your own table with a game you\'d like to play.';
}
