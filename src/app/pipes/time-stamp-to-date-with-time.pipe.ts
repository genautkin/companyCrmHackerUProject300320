import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStampToDateWithTime'
})
export class TimeStampToDateWithTimePipe implements PipeTransform {

  transform(timestamp:number): string {

        var date = new Date(timestamp);
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = date.getMinutes();
        // Seconds part from the timestamp
        var seconds =date.getSeconds();
        var day = date.getDate()
        var month = date.getMonth()+1;
        var year =date.getFullYear()
        return day+"/"+month+"/"+year+" "+hours+":"+minutes+":"+seconds
          }

}
