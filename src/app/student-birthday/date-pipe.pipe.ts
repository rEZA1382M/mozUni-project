import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(item: any[], searchDateMin: string, searchDateMax: string): any[] {
    if (!item) return [];
    if (!searchDateMin || !searchDateMax) return item;


    return item.filter(result => {
      return (result.birthday <= searchDateMax && searchDateMin <= result.birthday)

    })
  }
}
