import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSortPipe'
})
export class DateSortPipePipe implements PipeTransform {

  transform(items: any[]): any[] {
    if (!items) return [];
    return items.sort((a, b) => {
      if (a.birthday > b.birthday){
        return 1;
      }else if (b.birthday > a.birthday){
        return -1;
      } else {
        return 0;
      }
    })
  }

}
