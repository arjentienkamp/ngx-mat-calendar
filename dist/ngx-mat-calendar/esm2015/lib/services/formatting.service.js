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
FormattingService.ɵfac = function FormattingService_Factory(t) { return new (t || FormattingService)(); };
FormattingService.ɵprov = i0.ɵɵdefineInjectable({ token: FormattingService, factory: FormattingService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormattingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hdC1jYWxlbmRhci9zcmMvbGliL3NlcnZpY2VzL2Zvcm1hdHRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sVUFBVSxDQUFDOztBQUszQyxNQUFNLE9BQU8saUJBQWlCO0lBQ25CLE9BQU8sQ0FBQyxJQUFVO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVU7UUFDckIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxJQUFVO1FBQ3hCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sWUFBWSxDQUFDLElBQVU7UUFDMUIsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7O2tGQWZRLGlCQUFpQjt5REFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFGZCxNQUFNO3VGQUVULGlCQUFpQjtjQUg3QixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmb3JtYXQsIGlzVG9kYXkgfSBmcm9tICdkYXRlLWZucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRm9ybWF0dGluZ1NlcnZpY2Uge1xuICAgIHB1YmxpYyBnZXRUaW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdISDptbScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc1RvZGF5KGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGlzVG9kYXkoZGF0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERheU5hbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgJ0UnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGF5TnVtYmVyKGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0KGRhdGUsICdkJyk7XG4gICAgfVxufVxuIl19