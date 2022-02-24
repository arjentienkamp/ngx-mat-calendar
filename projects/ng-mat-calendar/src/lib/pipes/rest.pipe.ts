import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'restPipe'
})
export class RestPipe implements PipeTransform {
    transform(items: any[], start: number): any {
        console.log(items, start, items.slice(start));
        return items.slice(start);
    }
}
