import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showableTime'
})
export class ShowableTimePipe implements PipeTransform {

  transform(items: any[]): any[] {
    if(!items) return[];
    return items.filter(res => {
      if (res.toString().length < 4) {
        return res.toString().slice(0, 1) + ':' + res.toString().slice(1, 3)
      }else{
        return res.toString().slice(0, 2) + ':' + res.toString().slice(2, 4)
      }
    })
  }

}
