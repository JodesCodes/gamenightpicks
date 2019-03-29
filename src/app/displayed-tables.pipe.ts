import { Pipe, PipeTransform } from '@angular/core';
import { Table } from '../app/models/table';

@Pipe({
    name: 'displayedTables',
    pure: false
})

export class DisplayedTablesPipe implements PipeTransform {

    transform(tables: Table[]): Table[] {
        var filteredTables = [];
        if (tables != undefined) {
            filteredTables = tables.filter(table => {
                return table.Displayed;
            })
        }
        return filteredTables;
    }
}