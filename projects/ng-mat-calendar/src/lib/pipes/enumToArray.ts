import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
    transform(data: any): Array<any> {
        return Object.keys(data);
    }
}
