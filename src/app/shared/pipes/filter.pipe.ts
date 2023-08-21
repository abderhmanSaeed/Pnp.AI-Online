import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], key: string, search: string): any {
    if (arr && search)
      return arr.filter(el => el[key].toLowerCase().includes(search.toLowerCase()))
    return arr;
  }

}
