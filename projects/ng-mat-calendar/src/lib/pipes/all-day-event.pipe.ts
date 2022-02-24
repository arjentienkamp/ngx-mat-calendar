import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'allDayEventPipe'
})
export class AllDayEventPipe implements PipeTransform {
    transform(items: any[], allDay: boolean): any {
        if (allDay) {
            return items.filter(item => item.allDay);
        }

        return items.filter(item => !item.allDay);
    }
}
