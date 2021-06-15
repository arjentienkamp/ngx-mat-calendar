import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class Capitalize implements PipeTransform {
    transform(data: string): string {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }
}
