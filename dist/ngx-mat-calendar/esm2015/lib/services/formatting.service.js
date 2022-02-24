import { Injectable } from '@angular/core';
import { format, isToday } from 'date-fns';
import * as i0 from "@angular/core";
export class FormattingService {
    getTime(date) {
        return format(date, 'HH:mm');
    }
    isToday(date) {
        return isToday(date);
    }
    getDayName(date) {
        return format(date, 'E');
    }
    getDayNumber(date) {
        return format(date, 'd');
    }
}
FormattingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FormattingService_Factory() { return new FormattingService(); }, token: FormattingService, providedIn: "root" });
FormattingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL3NlcnZpY2VzL2Zvcm1hdHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUszQyxNQUFNLE9BQU8saUJBQWlCO0lBQ25CLE9BQU8sQ0FBQyxJQUFVO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVU7UUFDckIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFVO1FBQ3hCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sWUFBWSxDQUFDLElBQVU7UUFDMUIsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7WUFsQkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0LCBpc1RvZGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXJ2aWNlIHtcbiAgICBwdWJsaWMgZ2V0VGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnSEg6bW0nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNUb2RheShkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc1RvZGF5KGRhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXlOYW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdFJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERheU51bWJlcihkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChkYXRlLCAnZCcpO1xuICAgIH1cbn1cbiJdfQ==