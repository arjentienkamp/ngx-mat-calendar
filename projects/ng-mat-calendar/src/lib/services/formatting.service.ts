import * as moment from 'moment';

export class FormattingService {

    public getTime(date: string): string {
        return moment(date).format('HH:mm');
    }
}
