import { format } from 'date-fns';

export class FormattingService {
    public getTime(date: Date): string {
        return format(date, 'HH:mm');
    }
}
