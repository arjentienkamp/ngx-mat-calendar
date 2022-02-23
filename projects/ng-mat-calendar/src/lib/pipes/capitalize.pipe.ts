import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizePipe'
})
export class CapitalizePipe implements PipeTransform {
    transform(data: string): string {
        return data.charAt(0).toUpperCase() + data.slice(1);
    }
}
