import { format, isToday } from 'date-fns';

export class FormattingService {
    public getTime(date: Date): string {
        return format(date, 'HH:mm');
    }

    public isToday(date: Date): boolean {
        return isToday(date);
    }

    public getDayName(date: Date): string {
        return format(date, 'E');
    }

    public getDayNumber(date: Date): string {
        return format(date, 'd');
    }
}
