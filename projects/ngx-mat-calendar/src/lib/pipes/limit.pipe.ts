import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitPipe'
})
export class LimitPipe implements PipeTransform {
    transform(items: any[], limit: number): any {
        return items.slice(0, limit);
    }
}
