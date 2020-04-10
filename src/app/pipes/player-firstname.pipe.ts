import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/Player';

@Pipe({
  name: 'playerFirstname'
})
export class PlayerFirstnamePipe implements PipeTransform {

  transform(players: Player[]): string{
    const playersList = [];
    players.forEach(player => {
      playersList.push(player.FirstName); 
    });

   const commaSeparatedList = playersList.join(', ');

    return commaSeparatedList;
  }
}
