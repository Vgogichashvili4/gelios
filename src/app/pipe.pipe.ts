import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class PipePipe implements PipeTransform {
  transform(items: any[], searchTerm: string, property: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;
    searchTerm = searchTerm.toLowerCase();
    return items.filter(it => {
      if(property){
        return it[property].toLowerCase().includes(searchTerm);
      } else {
        return it.toLowerCase().includes(searchTerm);
      }
    });
  }

}
